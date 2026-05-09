import { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Importação do Lottie

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para rolar suavemente e centralizar o elemento na tela
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Evita o pulo seco padrão do HTML
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Efeito de deslize suave
        block: "center",    // Centraliza na tela
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/80 backdrop-blur-md shadow-xl border-b border-white/5"
          : "bg-dark-bg border-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 h-20 grid grid-cols-3 items-center">
        
        {/* LADO ESQUERDO: Logo */}
        <div className="flex justify-start">
          <div className="bg-brand-coral w-12 h-12 flex items-center justify-center font-bold text-2xl">
            ES.
          </div>
        </div>

        {/* CENTRO: Navegação */}
        <nav className="hidden lg:flex justify-center items-center gap-8 text-gray-300 font-medium text-[12px] tracking-[0.2em] uppercase">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Skills
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')}
            className="hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="#experiense" 
            onClick={(e) => scrollToSection(e, 'experiense')}
            className="hover:text-white transition-colors"
          >
            Experiencia
          </a>
          <a 
            href="#academic" 
            onClick={(e) => scrollToSection(e, 'academic')}
            className="hover:text-white transition-colors"
          >
            Escolaridade
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-white transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* LADO DIREITO: Animação Lottie */}
        <div className="flex justify-end items-center">
          {/* Container com tamanho fixo (w-16 h-16 = 64px) para não quebrar o header (h-20 = 80px) */}
          <div className="w-16 h-16 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/90ca8b3f-83cf-448c-8246-026301f82ff6/0vUKYlLKJo.lottie"
              loop
              autoplay
            />
          </div>
        </div>

      </div>
    </header>
  );
}