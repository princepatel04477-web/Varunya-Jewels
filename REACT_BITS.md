# React Bits source components

The repository owns adapted MIT-licensed source from [React Bits](https://reactbits.dev), rather than importing a UI package.

- `SplitText` — masked word reveal in the homepage hero.
- `LightRays` — WebGL hero atmosphere, dynamically loaded with SSR disabled and held to 6% opacity.
- `Magnet` — restrained displacement on the hero CTA.
- `FlowingMenu` — collection set piece in the full-screen navigation.

Adaptations preserve the site's animation ownership contract, square geometry, reduced-motion behavior and restrained visual palette. GSAP imports are centralized in `lib/gsap.ts`.
