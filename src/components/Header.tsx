import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Novo estado para o menu do celular

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/80 backdrop-blur-md shadow-xl border-b border-white/5"
            : "bg-dark-bg border-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-10 h-20 flex justify-between items-center">
          <div className="flex justify-start w-1/3">
            <div className="bg-brand-coral w-12 h-12 flex items-center justify-center font-bold text-2xl z-50">
              ES.
            </div>
          </div>

          <nav className="hidden lg:flex justify-center items-center gap-8 text-gray-300 font-medium text-[12px] tracking-[0.2em] uppercase w-1/3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#experiense"
              onClick={(e) => scrollToSection(e, "experiense")}
              className="hover:text-white transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#academic"
              onClick={(e) => scrollToSection(e, "academic")}
              className="hover:text-white transition-colors"
            >
              Escolaridade
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="hover:text-white transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="flex justify-end items-center gap-4 w-1/3 z-50">
            <div className="w-16 h-16 flex items-center justify-center hidden sm:flex">
              <DotLottieReact
                src="https://lottie.host/90ca8b3f-83cf-448c-8246-026301f82ff6/0vUKYlLKJo.lottie"
                loop
                autoplay
              />
            </div>

            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div
                className={`w-6 h-0.5 bg-brand-coral transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-brand-coral transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-brand-coral transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-dark-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-white font-bold text-xl tracking-[0.1em] uppercase">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="hover:text-brand-coral transition-colors"
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="hover:text-brand-coral transition-colors"
          >
            Skills
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="hover:text-brand-coral transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#experiense"
            onClick={(e) => scrollToSection(e, "experiense")}
            className="hover:text-brand-coral transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#academic"
            onClick={(e) => scrollToSection(e, "academic")}
            className="hover:text-brand-coral transition-colors"
          >
            Escolaridade
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-brand-coral transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </>
  );
}
