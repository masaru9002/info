import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis) {
  lenis = instance;
}

export function getLenisInstance(): Lenis | null {
  return lenis;
}
