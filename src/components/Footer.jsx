export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {year} UniPDF Studio. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm" aria-label="Footer">
            <a href="#privacy" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
            <a href="#terms" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
            <a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
