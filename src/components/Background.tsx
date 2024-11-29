import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { StarField } from "./StarField";
import { gsap } from "gsap";
import { getScreenConfig, getGalaxyParams } from "../utils/ScreenUtils";

export const nebulaVertexShader = `
varying vec3 vColor;
attribute float aScale;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aScale * 15.0 * (300.0 / -mvPosition.z);
}`;

export const nebulaFragmentShader = `
varying vec3 vColor;

void main() {
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float r = length(xy);
    float alpha = smoothstep(0.5, 0.0, r);
    float structure = smoothstep(0.2, 0.0, r) * 0.5;
    gl_FragColor = vec4(vColor * (1.0 + structure), alpha * 0.08);
}`;

const GalaxyBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const { pixelRatio, aspectRatio, width, height } = getScreenConfig();
    const params = getGalaxyParams();

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = params.cameraDistance;
    controls.minDistance = params.cameraDistance * 0.25;

    // Create galaxy
    let galaxyGeometry: THREE.BufferGeometry | null = null;
    let galaxyMaterial: THREE.PointsMaterial | null = null;
    let galaxyPoints: THREE.Points | null = null;

    const generateGalaxy = () => {
      if (galaxyPoints !== null) {
        galaxyGeometry?.dispose();
        galaxyMaterial?.dispose();
        scene.remove(galaxyPoints);
      }

      galaxyGeometry = new THREE.BufferGeometry();

      const positions = new Float32Array(params.starCount * 3);
      const colors = new Float32Array(params.starCount * 3);
      const scales = new Float32Array(params.starCount);

      for (let i = 0; i < params.starCount; i++) {
        const i3 = i * 3;

        const radius = Math.random() * params.galaxyRadius;
        const spinAngle = radius * params.spin;
        const branchAngle = ((i % params.arms) / params.arms) * Math.PI * 2;

        const randomX =
          Math.pow(Math.random(), params.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          params.randomness *
          radius;
        const randomY =
          Math.pow(Math.random(), params.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          params.randomness *
          radius;
        const randomZ =
          Math.pow(Math.random(), params.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          params.randomness *
          radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] =
          Math.sin(branchAngle + spinAngle) * radius + randomZ;

        const mixedColor = new THREE.Color();
        mixedColor.lerpColors(
          params.insideColor,
          params.outsideColor,
          radius / params.galaxyRadius
        );

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        scales[i] = Math.random();
      }

      galaxyGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      galaxyGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );
      galaxyGeometry.setAttribute(
        "aScale",
        new THREE.BufferAttribute(scales, 1)
      );

      galaxyMaterial = new THREE.PointsMaterial({
        size: params.particleSize,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        transparent: true,
      });

      galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
      galaxyPoints.rotation.x = THREE.MathUtils.degToRad(25);
      scene.add(galaxyPoints);
    };

    const createNebulae = () => {
      const nebulae: THREE.Points[] = [];
      const colors = [
        new THREE.Color("#ff3080").multiplyScalar(0.4),
        new THREE.Color("#4560ff").multiplyScalar(0.4),
        new THREE.Color("#9932cc").multiplyScalar(0.4),
        new THREE.Color("#ff69b4").multiplyScalar(0.4),
        new THREE.Color("#4169e1").multiplyScalar(0.4),
      ];

      for (let i = 0; i < params.nebulaCount; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(params.nebulaParticleCount * 3);
        const particleColors = new Float32Array(params.nebulaParticleCount * 3);
        const scales = new Float32Array(params.nebulaParticleCount);

        for (let j = 0; j < params.nebulaParticleCount; j++) {
          const i3 = j * 3;

          const radius =
            (150 + Math.random() * 100) *
            (1 + Math.sin(Math.random() * Math.PI) * 0.3);
          const theta = Math.random() * Math.PI * 2;
          const phi = (Math.random() - 0.5) * 0.5;

          positions[i3] = radius * Math.sin(theta) * Math.cos(phi);
          positions[i3 + 1] = radius * Math.sin(phi);
          positions[i3 + 2] = radius * Math.cos(theta) * Math.cos(phi);

          const alpha = Math.pow(Math.random(), 1.5);
          particleColors[i3] = colors[i % colors.length].r * alpha;
          particleColors[i3 + 1] = colors[i % colors.length].g * alpha;
          particleColors[i3 + 2] = colors[i % colors.length].b * alpha;
          const { isMobile } = getScreenConfig();
          scales[j] = Math.random() * (isMobile ? 20 : 10);
        }

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute(
          "color",
          new THREE.BufferAttribute(particleColors, 3)
        );
        geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

        const material = new THREE.ShaderMaterial({
          vertexShader: nebulaVertexShader,
          fragmentShader: nebulaFragmentShader,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexColors: true,
        });

        const points = new THREE.Points(geometry, material);
        points.rotation.x = Math.random() * Math.PI;
        points.rotation.y = Math.random() * Math.PI;

        nebulae.push(points);
        scene.add(points);
      }

      return nebulae;
    };

    const starField = new StarField(params.starFieldCount);
    scene.add(starField.getPoints());

    generateGalaxy();
    const nebulae = createNebulae();

    camera.position.set(
      params.cameraDistance * 0.8,
      params.cameraDistance * 0.4,
      params.cameraDistance * 0.8
    );
    camera.lookAt(0, 0, 0);

    if (mountRef.current) {
      mountRef.current.style.opacity = "0";
    }

    gsap.to(camera.position, {
      x: params.cameraDistance * 0.4,
      y: params.cameraDistance * 0.2,
      z: params.cameraDistance * 0.4,
      duration: 2.5,
      ease: "power2.inOut",
      delay: 0.5,
    });

    gsap.to(mountRef.current, {
      opacity: 1,
      duration: 2,
      delay: 0.5,
    });

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (galaxyPoints) {
        galaxyPoints.rotation.y = elapsedTime * 0.05;
      }

      starField.update(elapsedTime);

      nebulae.forEach((nebula, i) => {
        nebula.rotation.y = elapsedTime * 0.02 * (i + 1);
        nebula.rotation.z = elapsedTime * 0.01 * (i + 1);
      });

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const { aspectRatio, width, height } = getScreenConfig();
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      starField.dispose();
      nebulae.forEach((nebula) => {
        nebula.geometry.dispose();
        (nebula.material as THREE.ShaderMaterial).dispose();
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(to bottom, #0a001f, #1a0b2e, #261447)",
        opacity: 0,
      }}
    />
  );
};

export default GalaxyBackground;
