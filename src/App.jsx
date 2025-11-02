import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CanvasPlayground from "./components/CanvasPlayground";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />

      <main>
        <Hero />
        <CanvasPlayground />
      </main>

      <Footer />
    </div>
  );
}

export default App;
