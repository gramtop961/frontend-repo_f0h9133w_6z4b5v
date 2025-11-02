import Spline from "@splinetool/react-spline";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:ring-blue-900">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> All-in-one PDF workspace
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              Create, edit, and collaborate on PDFs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">with UniPDF Studio</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300 sm:text-lg">
              A modern editor powered by PDF.js and Fabric.js. Annotate, rewrite with AI, manage pages, and work together in real-time — right in your browser.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
              >
                Start Editing <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                View Demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" aria-hidden="true" /> Secure by design</div>
              <div className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
              <div>Responsive and accessible</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-200/60 dark:ring-neutral-800/60">
            <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: "100%", height: "100%" }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-neutral-950 dark:via-neutral-950/10" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
