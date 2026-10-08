import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface LiquidRevealProps {
  beforeSrc: string;
  afterSrc: string;
  className?: string;
  style?: CSSProperties;
}

const BRUSH_RADIUS = 143; // CSS px
const DECAY = 0.016; // per frame

export function LiquidReveal({
  beforeSrc,
  afterSrc,
  className = "",
  style,
}: LiquidRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mainCanvas = canvas;
    const mainCtx = ctx;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let radius = BRUSH_RADIUS * dpr;
    let diameter = Math.ceil(radius * 2);
    let c = radius;

    // Load after image
    const afterImg = new Image();
    afterImg.src = afterSrc;
    let afterImgLoaded = false;
    afterImg.onload = () => {
      afterImgLoaded = true;
      updateCoverCanvas();
    };

    // Offscreen cover canvas
    const coverCanvas = document.createElement("canvas");
    const coverCtx = coverCanvas.getContext("2d");

    // Offscreen brush canvas
    const brushCanvas = document.createElement("canvas");
    const brushCtx = brushCanvas.getContext("2d");

    function setupBrushCanvas() {
      radius = BRUSH_RADIUS * dpr;
      diameter = Math.ceil(radius * 2);
      c = radius;
      brushCanvas.width = diameter;
      brushCanvas.height = diameter;
    }

    function updateCoverCanvas() {
      if (!coverCtx || !afterImgLoaded || !afterImg.naturalWidth) return;
      coverCanvas.width = mainCanvas.width;
      coverCanvas.height = mainCanvas.height;

      // object-fit: cover math (scale to fill, center)
      const canvasRatio = coverCanvas.width / coverCanvas.height;
      const imgRatio = afterImg.naturalWidth / afterImg.naturalHeight;
      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasRatio > imgRatio) {
        drawW = coverCanvas.width;
        drawH = coverCanvas.width / imgRatio;
        drawX = 0;
        drawY = (coverCanvas.height - drawH) / 2;
      } else {
        drawH = coverCanvas.height;
        drawW = coverCanvas.height * imgRatio;
        drawX = (coverCanvas.width - drawW) / 2;
        drawY = 0;
      }

      coverCtx.clearRect(0, 0, coverCanvas.width, coverCanvas.height);
      coverCtx.drawImage(afterImg, drawX, drawY, drawW, drawH);
    }

    function onResize() {
      if (!container || !mainCanvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      mainCanvas.width = Math.round(rect.width * dpr);
      mainCanvas.height = Math.round(rect.height * dpr);
      setupBrushCanvas();
      updateCoverCanvas();
    }

    onResize();

    const resizeObserver = new ResizeObserver(() => {
      onResize();
    });
    resizeObserver.observe(container);

    // Pointer trail mechanics
    const points: Array<{ x: number; y: number }> = [];
    let lastPoint: { x: number; y: number } | null = null;
    let idle = 0;
    let isTicking = false;
    let rafId: number | null = null;

    function stamp(x: number, y: number) {
      if (!brushCtx || !coverCtx) return;

      // on the brush canvas, clear, source-over
      brushCtx.clearRect(0, 0, diameter, diameter);
      brushCtx.globalCompositeOperation = "source-over";

      // draw a radial gradient centered
      const grad = brushCtx.createRadialGradient(c, c, 0, c, c, radius);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.55, "rgba(255,255,255,0.82)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      brushCtx.fillStyle = grad;
      brushCtx.fillRect(0, 0, diameter, diameter);

      // source-in, draw the matching region of the cover canvas
      brushCtx.globalCompositeOperation = "source-in";
      brushCtx.drawImage(
        coverCanvas,
        x - c,
        y - c,
        diameter,
        diameter,
        0,
        0,
        diameter,
        diameter
      );

      // on the main canvas source-over, drawImage(brush, x-c, y-c)
      mainCtx.globalCompositeOperation = "source-over";
      mainCtx.drawImage(brushCanvas, x - c, y - c);
    }

    function tick() {
      const drawing = points.length > 0;
      if (drawing) {
        idle = 0;
      } else {
        idle++;
        if (idle > 120) {
          if (idle === 121) {
            mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
          }
          isTicking = false;
          return;
        }
      }

      // Compute fade = drawing ? decay : min(decay + idle*0.004, 0.5)
      const fade = drawing ? DECAY : Math.min(DECAY + idle * 0.004, 0.5);

      // Apply destination-out so the existing trail decays
      mainCtx.globalCompositeOperation = "destination-out";
      mainCtx.fillStyle = `rgba(0,0,0,${fade})`;
      mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

      // If drawing: for each queued point stamp it, then clear the queue
      if (drawing) {
        for (let i = 0; i < points.length; i++) {
          stamp(points[i].x, points[i].y);
        }
        points.length = 0;
      }

      // If idle reaches 120 frames: clearRect(full) (hard clear so no residue lingers)
      if (idle === 120) {
        mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
      }

      rafId = requestAnimationFrame(tick);
    }

    function startTick() {
      if (!isTicking) {
        isTicking = true;
        idle = 0;
        rafId = requestAnimationFrame(tick);
      }
    }

    function onPointerMove(e: PointerEvent) {
      if (!container || !afterImgLoaded) return;
      const rect = container.getBoundingClientRect();
      const canvasX = (e.clientX - rect.left) * dpr;
      const canvasY = (e.clientY - rect.top) * dpr;

      // Ignore points more than radius outside the canvas (and reset last)
      if (
        canvasX < -radius ||
        canvasX > mainCanvas.width + radius ||
        canvasY < -radius ||
        canvasY > mainCanvas.height + radius
      ) {
        lastPoint = null;
        return;
      }

      // Interpolate between last point and new point
      if (!lastPoint) {
        points.push({ x: canvasX, y: canvasY });
        lastPoint = { x: canvasX, y: canvasY };
      } else {
        const dx = canvasX - lastPoint.x;
        const dy = canvasY - lastPoint.y;
        const dist = Math.hypot(dx, dy);
        const step = Math.max(radius * 0.3, 1);
        const n = Math.min(Math.ceil(dist / step), 60);
        for (let i = 1; i <= n; i++) {
          const t = i / n;
          points.push({
            x: lastPoint.x + dx * t,
            y: lastPoint.y + dy * t,
          });
        }
        lastPoint = { x: canvasX, y: canvasY };
      }

      startTick();
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [afterSrc, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden select-none pointer-events-none ${className}`}
      style={{ position: "absolute", inset: 0, zIndex: 0, ...style }}
    >
      {/* (1) Before image: always visible, LCP image */}
      <img
        src={beforeSrc}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* (2) After image: painted on canvas along cursor trail */}
      {!reducedMotion && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
