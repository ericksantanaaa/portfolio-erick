import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experiense";
import Academic from "./components/Academic";

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Academic />
    </div>
  );
}

export default App;
