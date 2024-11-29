import * as THREE from "three";

export const getScreenConfig = () => {
  const isMobile = window.innerWidth < 768;
  const pixelRatio = Math.min(window.devicePixelRatio, 2);

  return {
    isMobile,
    pixelRatio,
    aspectRatio: window.innerWidth / window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const getGalaxyParams = () => {
  const { isMobile } = getScreenConfig();

  return {
    starCount: isMobile ? 30000 : 50000,
    galaxyRadius: isMobile ? 80 : 100,
    arms: isMobile ? 4 : 5,
    spin: 1.5,
    randomness: isMobile ? 0.15 : 0.2,
    randomnessPower: 3,
    insideColor: new THREE.Color("#ff3080").multiplyScalar(isMobile ? 1.5 : 1),
    outsideColor: new THREE.Color("#4560ff").multiplyScalar(isMobile ? 1.5 : 1),
    particleSize: isMobile ? 0.15 : 0.125,
    cameraDistance: isMobile ? 300 : 400,
    nebulaCount: isMobile ? 3 : 5,
    nebulaParticleCount: isMobile ? 2000 : 3000,
    starFieldCount: isMobile ? 7000 : 10000,
  };
};
