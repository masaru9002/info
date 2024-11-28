import * as THREE from "three";
import { getScreenConfig } from "./ScreenUtils";

const starFieldVertexShader = `
attribute float size;
varying vec3 vColor;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}`;

const starFieldFragmentShader = `
varying vec3 vColor;

void main() {
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float r = length(xy);
    float alpha = 1.0 - smoothstep(0.0, 0.5, r);
    float intensity = 1.0 - (r * 2.0);
    vec3 glow = vColor * intensity;
    gl_FragColor = vec4(glow, alpha);
    if (alpha < 0.01) discard;
}`;

export class StarField {
  private geometry: THREE.BufferGeometry;
  private material: THREE.ShaderMaterial = new THREE.ShaderMaterial();
  private points!: THREE.Points;

  constructor(starCount: number = 10000) {
    this.geometry = new THREE.BufferGeometry();
    this.createStarField(starCount);
  }

  private createStarField(starCount: number) {
    const { isMobile } = getScreenConfig();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * (isMobile ? 300 : 400);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const starColor = new THREE.Color();
      starColor.setHSL(
        0.5 + Math.random() * 0.1,
        0.3 + Math.random() * 0.3,
        0.8 + Math.random() * 0.2
      );

      colors[i3] = starColor.r;
      colors[i3 + 1] = starColor.g;
      colors[i3 + 2] = starColor.b;

      sizes[i] = Math.random() * (isMobile ? 3 : 2) + (isMobile ? 1 : 0.5);
    }

    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    this.material = new THREE.ShaderMaterial({
      vertexShader: starFieldVertexShader,
      fragmentShader: starFieldFragmentShader,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  public getPoints(): THREE.Points {
    return this.points;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }

  public update(time: number) {
    this.points.rotation.y = time * 0.02;
  }
}
