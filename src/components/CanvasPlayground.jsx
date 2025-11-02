import { useEffect, useRef, useState } from "react";
import { Download, Eraser, Pencil, Trash2 } from "lucide-react";

export default function CanvasPlayground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef({ x: 0, y: 0 });

  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#3b82f6"); // blue-500
  const [size, setSize] = useState(3);

  // Resize canvas to fit container with device pixel ratio
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const { width, height } = container.getBoundingClientRect();

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctxRef.current = ctx;

    drawGrid(ctx, width, height);
  };

  // Subtle grid background
  const drawGrid = (ctx, width, height) => {
    ctx.save();
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = window.matchMedia("(prefers-color-scheme: dark)").matches ? "#0a0a0a" : "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const spacing = 24;
    ctx.strokeStyle = window.matchMedia("(prefers-color-scheme: dark)").matches ? "#1f2937" : "#e5e7eb"; // neutral-800 / neutral-200
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x += spacing) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += spacing) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
    ctx.restore();
  };

  useEffect(() => {
    resizeCanvas();
    const ro = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) ro.observe(containerRef.current);

    const onTheme = () => resizeCanvas();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onTheme);

    return () => {
      ro.disconnect();
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", onTheme);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Update stroke style when color/size changes
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
  }, [color, size]);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDraw = (e) => {
    drawingRef.current = true;
    const pos = getPos(e);
    lastPointRef.current = pos;
  };

  const draw = (e) => {
    if (!drawingRef.current) return;
    const ctx = ctxRef.current;
    const pos = getPos(e);

    ctx.save();
    ctx.globalCompositeOperation = tool === "eraser" ? "destination-out" : "source-over";
    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.restore();

    lastPointRef.current = pos;
  };

  const endDraw = () => {
    drawingRef.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    drawGrid(ctx, canvas.clientWidth, canvas.clientHeight);
  };

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section id="editor" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Canvas playground</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Draw with a pen or erase on a crisp, responsive canvas. This will evolve into the PDF editor workspace.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => setTool("pen")} className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${tool === "pen" ? "bg-blue-600 text-white border-blue-600" : "border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900"}`} aria-pressed={tool === "pen"}>
              <Pencil className="h-4 w-4" aria-hidden="true" /> Pen
            </button>
            <button onClick={() => setTool("eraser")} className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${tool === "eraser" ? "bg-blue-600 text-white border-blue-600" : "border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900"}`} aria-pressed={tool === "eraser"}>
              <Eraser className="h-4 w-4" aria-hidden="true" /> Eraser
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">Color</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} aria-label="Stroke color" className="h-9 w-12 rounded border border-neutral-200 dark:border-neutral-800 bg-transparent" />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">Size</span>
            <input type="range" min="1" max="20" value={size} onChange={(e) => setSize(Number(e.target.value))} aria-label="Stroke width" className="w-40" />
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums w-6 text-right">{size}</span>
          </label>
          <div className="flex items-center gap-2">
            <button onClick={clearCanvas} className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900">
              <Trash2 className="h-4 w-4" aria-hidden="true" /> Clear
            </button>
            <button onClick={downloadPNG} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-2 text-sm font-medium hover:opacity-90">
              <Download className="h-4 w-4" aria-hidden="true" /> Download
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900 p-3 shadow-sm">
          <div ref={containerRef} className="relative h-[420px] sm:h-[520px] w-full overflow-hidden rounded-lg">
            <canvas
              ref={canvasRef}
              role="img"
              aria-label="Drawing canvas"
              onMouseDown={startDraw}
              onMouseMove={draw}
              onMouseUp={endDraw}
              onMouseLeave={endDraw}
              onTouchStart={(e) => { e.preventDefault(); startDraw(e); }}
              onTouchMove={(e) => { e.preventDefault(); draw(e); }}
              onTouchEnd={endDraw}
              className="block h-full w-full cursor-crosshair"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
