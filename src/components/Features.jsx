import { Brain, FileText, Layers, Pencil, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Pixel-perfect rendering",
    desc: "Powered by PDF.js 3.x for fast, accurate display of complex PDFs.",
    icon: FileText,
  },
  {
    title: "Canvas editing",
    desc: "Fabric.js overlay for text, drawings, shapes, images, and more.",
    icon: Pencil,
  },
  {
    title: "AI assistance",
    desc: "Summaries, chat with documents, and smart rewrite with one click.",
    icon: Brain,
  },
  {
    title: "Real-time collaboration",
    desc: "Live cursors and updates through WebSocket-powered sessions.",
    icon: Users,
  },
  {
    title: "Page management",
    desc: "Reorder, rotate, merge, split, and duplicate with simple gestures.",
    icon: Layers,
  },
  {
    title: "Privacy first",
    desc: "Role-based access and secure processing protect your files.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Built for productivity
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Everything you need to work with PDFs at scale — fast, accessible, and delightful.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-600 dark:text-blue-400 grid place-items-center ring-1 ring-blue-200/40 dark:ring-blue-900/30">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
