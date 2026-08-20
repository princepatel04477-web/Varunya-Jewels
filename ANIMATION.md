# Animation contract

One element, one animation owner. Motion owns mount/unmount, shared layout, gestures and list stagger. GSAP + ScrollTrigger own scroll-driven sequences. Anime.js is restricted to SVG stroke and path work. If a feature needs scroll entry and a gesture, animate separate wrapper and child nodes. All motion must resolve to a stable final layout under `prefers-reduced-motion`.
