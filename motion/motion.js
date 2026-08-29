import { Mesh, Program, Renderer, Triangle } from 'https://esm.sh/ogl@1.0.8';

const VERTEX = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const ORB = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + 1.0), f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rotation = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rotation * p * 2.02 + 11.3;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);
  float angle = atan(p.y, p.x);
  float radius = length(p);
  float drift = fbm(p * 3.2 + vec2(uTime * 0.08, -uTime * 0.11));
  float edge = 0.305 + (drift - 0.5) * 0.085 + sin(angle * 4.0 + uTime * 0.72) * 0.016;
  float shell = 1.0 - smoothstep(edge - 0.018, edge + 0.032, radius);
  float hollow = smoothstep(0.075, 0.235, radius);
  float rim = exp(-abs(radius - edge) * 42.0);
  float sweep = 0.5 + 0.5 * cos(angle - uTime * 0.55);
  vec3 deep = vec3(0.018, 0.095, 0.22);
  vec3 cyan = vec3(0.02, 0.82, 1.0);
  vec3 blue = vec3(0.06, 0.29, 1.0);
  vec3 color = mix(blue, cyan, sweep * 0.65 + drift * 0.35);
  color = mix(deep, color, shell * (0.55 + rim));
  color += cyan * rim * (0.16 + sweep * 0.28);
  float alpha = clamp(shell * hollow * 0.82 + rim * 0.44, 0.0, 0.94);
  fragColor = vec4(color * alpha, alpha);
}`;

const STRANDS = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
out vec4 fragColor;
const float PI = 3.14159265;

vec3 palette(float t) {
  vec3 cyan = vec3(0.02, 0.88, 1.0);
  vec3 blue = vec3(0.04, 0.28, 1.0);
  vec3 ice = vec3(0.74, 0.96, 1.0);
  float wave = 0.5 + 0.5 * cos(6.28318 * t);
  return mix(mix(blue, cyan, wave), ice, pow(max(sin(PI * t), 0.0), 8.0) * 0.34);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  uv /= 1.42;
  float env = pow(max(cos(uv.x * PI * 1.25), 0.0), 3.2);
  vec3 col = vec3(0.0);
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float phase = fi * 1.48;
    float frequency = 2.1 + fi * 0.31;
    float speed = 1.15 + fi * 0.88;
    float w = sin(uv.x * frequency + uTime * 0.54 * speed + phase) * 0.60
            + sin(uv.x * frequency * 1.14 - uTime * 0.35 * speed + phase * 1.7) * 0.40;
    float y = w * 0.112 * env;
    float d = abs(uv.y - y);
    float thickness = 0.0105 * (0.42 + env);
    float glow = thickness / (d + thickness * 0.42);
    glow *= glow;
    col += palette(fi / 7.0 + uv.x * 0.28 + uTime * 0.018) * glow * env;
  }
  col = 1.0 - exp(-col * 2.72);
  float alpha = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0) * 0.92;
  fragColor = vec4(col * 0.92, alpha);
}`;

const THREADS = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
out vec4 fragColor;
#define TAU 6.28318530718

float glow(float distanceToLine, float falloff, float width) {
  return width / pow(max(distanceToLine, 0.0001), falloff);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float pinch = 0.5;
  float spread = 0.18 * abs(uv.x - pinch);
  float mirror = sign(pinch - uv.x);
  vec3 cyan = vec3(0.02, 0.88, 1.0);
  vec3 blue = vec3(0.025, 0.22, 0.95);
  vec3 ice = vec3(0.76, 0.96, 1.0);
  vec3 col = vec3(0.0);
  float total = 0.0;
  for (int i = 0; i < 8; i++) {
    float fi = float(i);
    float amplitude = spread * (1.0 + fi * 0.78);
    float phase = (uTime * 0.23 + fi * TAU / 8.0) * mirror;
    float sdf = abs((uv.y - 0.5) + sin(uv.x * 5.2 + phase) * amplitude) / 1.04;
    float energy = glow(sdf, 0.61, 0.018);
    vec3 threadColor = mix(blue, cyan, fi / 7.0);
    col += energy * threadColor;
    total += energy;
  }
  float core = smoothstep(0.52, 2.2, total);
  col = mix(col, ice * total, core * 0.34) * 0.48;
  float alpha = clamp(total, 0.0, 1.0) * 0.92;
  fragColor = vec4(col * alpha, alpha);
}`;

const RINGS = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
out vec4 fragColor;
const float HALF_PI = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < 0.72 ? smoothstep(0.0, 0.72, t) : 1.0 - smoothstep(2.62, CYCLE - 0.2, t);
}

float ring(vec2 p, float radius, float cut, float offset, float px) {
  float t = mod(uTime + offset, CYCLE);
  float r = radius + t / CYCLE * 0.12;
  float d = abs(length(p) - r);
  float angle = atan(abs(p.y), abs(p.x)) / HALF_PI;
  float thickness = max(1.0 - angle, 0.5) * px * 2.2;
  float highlight = (1.0 - smoothstep(thickness, thickness * 1.5, d)) + 1.0;
  d += pow(cut * angle, 3.0) * r;
  return highlight * exp(-10.5 * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) * px;
  float rotation = -0.14;
  p = mat2(cos(rotation), -sin(rotation), sin(rotation), cos(rotation)) * p;
  vec3 cyan = vec3(0.02, 0.88, 1.0);
  vec3 blue = vec3(0.03, 0.22, 1.0);
  vec3 color = vec3(0.0);
  float coverage = 0.0;
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    vec3 ringColor = mix(cyan, blue, fi / 6.0);
    float amount = ring(p, 0.21 + fi * 0.072, pow(1.42, fi), i == 0 ? 0.0 : 2.95 * fi, px);
    color = mix(color, ringColor, vec3(amount));
    coverage = max(coverage, amount);
  }
  float grain = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  color += (grain - 0.5) * 0.008 * clamp(coverage, 0.0, 1.0);
  float intensity = max(color.r, max(color.g, color.b));
  vec3 emissive = intensity > 0.0001 ? clamp(color / intensity, 0.0, 1.0) : vec3(0.0);
  float alpha = clamp(intensity * 0.72 + coverage * 0.025, 0.0, 0.88);
  fragColor = vec4(emissive * alpha, alpha);
}`;

function createController(element, fragment) {
  const renderer = new Renderer({
    webgl: 2,
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    dpr: Math.min(window.devicePixelRatio || 1, 2)
  });
  const gl = renderer.gl;
  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  element.appendChild(gl.canvas);

  const uniforms = {
    uTime: { value: 0 },
    uResolution: { value: new Float32Array([1, 1]) }
  };
  const program = new Program(gl, { vertex: VERTEX, fragment, uniforms });
  const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
  let frame = 0;
  let elapsed = 0;
  let last = 0;
  let running = false;

  const resize = () => {
    const width = Math.max(1, element.clientWidth);
    const height = Math.max(1, element.clientHeight);
    renderer.setSize(width, height);
    uniforms.uResolution.value[0] = gl.drawingBufferWidth;
    uniforms.uResolution.value[1] = gl.drawingBufferHeight;
    renderer.render({ scene: mesh });
  };

  const render = time => {
    if (!running) return;
    const delta = last ? Math.min(time - last, 80) : 0;
    last = time;
    elapsed += delta * 0.001;
    uniforms.uTime.value = elapsed;
    renderer.render({ scene: mesh });
    frame = requestAnimationFrame(render);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(element);
  resize();

  return {
    start() {
      if (running || document.hidden) return;
      running = true;
      element.dataset.running = 'true';
      last = 0;
      frame = requestAnimationFrame(render);
    },
    stop() {
      running = false;
      element.dataset.running = 'false';
      cancelAnimationFrame(frame);
      frame = 0;
    },
    drawStill() {
      uniforms.uTime.value = elapsed;
      renderer.render({ scene: mesh });
    }
  };
}

const definitions = [
  ['effect-orb', ORB],
  ['effect-strands', STRANDS],
  ['effect-threads', THREADS],
  ['effect-rings', RINGS]
];

const effects = definitions.map(([id, shader]) => {
  const element = document.getElementById(id);
  return { element, controller: createController(element, shader) };
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const DISPLAY_MS = 5000;
const FADE_MS = 900;
let current = 0;
let cycleTimer = 0;
let stopTimer = 0;

function stopAll() {
  clearTimeout(cycleTimer);
  clearTimeout(stopTimer);
  effects.forEach(effect => effect.controller.stop());
}

function scheduleCycle() {
  clearTimeout(cycleTimer);
  if (reduceMotion.matches || document.hidden) return;
  cycleTimer = window.setTimeout(showNext, DISPLAY_MS);
}

function showNext() {
  const previous = current;
  current = (current + 1) % effects.length;
  const incoming = effects[current];
  const outgoing = effects[previous];

  incoming.controller.start();
  incoming.element.classList.add('is-active');
  outgoing.element.classList.remove('is-active');

  clearTimeout(stopTimer);
  stopTimer = window.setTimeout(() => {
    outgoing.controller.stop();
  }, FADE_MS + 80);
  scheduleCycle();
}

function resetExperience() {
  stopAll();
  effects.forEach((effect, index) => {
    effect.element.classList.toggle('is-active', index === current);
  });
  if (reduceMotion.matches) {
    effects[current].controller.drawStill();
    return;
  }
  effects[current].controller.start();
  scheduleCycle();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAll();
  else resetExperience();
});
reduceMotion.addEventListener('change', resetExperience);
resetExperience();
