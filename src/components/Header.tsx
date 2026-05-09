import { useState, useEffect } from "react";
import iconeBusca from "../assets/icone-busca.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/80 backdrop-blur-md shadow-xl border-b border-white/5"
          : "bg-dark-bg border-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 h-20 grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <div className="bg-brand-coral w-12 h-12 flex items-center justify-center font-bold text-2xl">
            S.
          </div>
        </div>

        <nav className="hidden lg:flex justify-center items-center gap-8 text-gray-300 font-medium text-[12px] tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Services <span className="text-[10px] opacity-50">▼</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex justify-end items-center gap-10">
          <button
            className="hover:opacity-70 transition-opacity"
            aria-label="Search"
          >
            <img
              src={iconeBusca}
              alt="Buscar"
              className="w-7 h-7 object-contain"
            />
          </button>

          <button className="bg-brand-coral p-3 rounded-sm text-white flex flex-col gap-1 hover:brightness-110 transition-all">
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
