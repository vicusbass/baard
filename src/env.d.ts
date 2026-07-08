/// <reference types="astro/client" />

import type Lenis from 'lenis';

declare global {
  interface Window {
    /** Lenis instance created in Layout.astro; absent when prefers-reduced-motion. */
    __lenis?: Lenis;
  }
}
