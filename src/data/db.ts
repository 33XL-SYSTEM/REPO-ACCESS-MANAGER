import type { Category } from '../context/MusicContext';

const DB_NAME = 'RAM_MusicDB';
const DB_VERSION = 1;
const STORE_TRACKS = 'tracks';
const STORE_CATEGORIES = 'categories';

export interface IDBTrack {
  id: string;
  title: string;
  categoryId: string;
  blob: Blob;
}

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_TRACKS)) {
        db.createObjectStore(STORE_TRACKS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_CATEGORIES)) {
        db.createObjectStore(STORE_CATEGORIES, { keyPath: 'id' });
      }
    };
  });
};

export const db = {
  async saveTrack(track: IDBTrack): Promise<void> {
    const database = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_TRACKS, 'readwrite');
      const store = transaction.objectStore(STORE_TRACKS);
      const request = store.put(track);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },

  async deleteTrack(id: string): Promise<void> {
    const database = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_TRACKS, 'readwrite');
      const store = transaction.objectStore(STORE_TRACKS);
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },

  async updateTrackCategory(id: string, categoryId: string): Promise<void> {
    const database = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_TRACKS, 'readwrite');
      const store = transaction.objectStore(STORE_TRACKS);
      const request = store.get(id);
      request.onsuccess = () => {
        const track = request.result;
        if (track) {
          track.categoryId = categoryId;
          store.put(track).onsuccess = () => resolve();
        } else {
          resolve();
        }
      };
      request.onerror = () => reject(request.error);
    });
  },

  async getAllTracks(): Promise<IDBTrack[]> {
    const database = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_TRACKS, 'readonly');
      const store = transaction.objectStore(STORE_TRACKS);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },

  async saveCategories(categories: Category[]): Promise<void> {
    const database = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_CATEGORIES, 'readwrite');
      const store = transaction.objectStore(STORE_CATEGORIES);
      
      // We overwrite by clearing and re-adding, or just iterating (since they have unique IDs)
      // Actually clearing first is safer for deleted categories, but we can just use put for each
      // and delete manually, but simpler is just clear and put all.
      store.clear().onsuccess = () => {
        let count = 0;
        if (categories.length === 0) return resolve();
        
        categories.forEach(category => {
          store.put(category).onsuccess = () => {
            count++;
            if (count === categories.length) resolve();
          };
        });
      };
      transaction.onerror = () => reject(transaction.error);
    });
  },

  async getCategories(): Promise<Category[]> {
    const database = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_CATEGORIES, 'readonly');
      const store = transaction.objectStore(STORE_CATEGORIES);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
};
