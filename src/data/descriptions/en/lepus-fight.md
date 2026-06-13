# ⚔️ Lepus Fight Engine

A high-performance 2D fighting game engine designed entirely from scratch under the web-native execution philosophy. Written in TypeScript and rendered using the hardware-accelerated Phaser 3 engine, it revolutionizes fighting game development for browsers.

Inspired by the classic nostalgia and flexibility of MUGEN and Ikemen GO, it transcends emulation by translating raw data and legacy logic into reactive, ultra-low latency compiled code.

## Core Architecture

The engine's architecture rests on the principle of Modular Sovereignty, orchestrated through three decoupled fronts: the Native Core, the Legacy Bridge, and the Asset Loader. The native core manages vector math and hierarchical state machines at a constant 60 FPS, completely isolated from the renderers.

It features deterministic frame lifecycles, advanced input buffering for precise combos, native AABB hitbox physics, and the StateHub system for Hierarchical State Machines (HSM).