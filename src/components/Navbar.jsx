import { FileText, LayoutDashboard, LogIn, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" aria-label="UniPDF Studio Home">
            <div className="h-9 w-9 grid place-items-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-sm">
              <FileText className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              UniPDF Studio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
            <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Features
            </a>
            <a href="#editor" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" aria-hidden="true" /> Editor
            </a>
            <a href="#login" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
              <LogIn className="h-4 w-4" aria-hidden="true" /> Login
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Open App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
