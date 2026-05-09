import fotoErick from "../assets/foto-erick.jpeg";

export default function Hero() {
  return (
    <main
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-dark-bg overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0"
    >
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-[24vw] md:text-[12vw] font-black flex flex-col md:flex-row md:gap-[30vw] items-center leading-none tracking-tighter">
          <span className="text-white opacity-95">Erick</span>
          <span className="text-brand-coral opacity-95">Silva</span>
        </h2>
      </div>

      <div className="relative z-10 transition-transform mt-4 mb-4 md:mb-0">
        <div className="w-[65vw] h-[65vw] sm:w-[50vw] sm:h-[50vw] max-w-[420px] max-h-[420px] rounded-full border-[8px] md:border-[12px] border-dark-card bg-[#222] shadow-2xl flex items-center justify-center overflow-hidden">
          <img
            src={fotoErick}
            alt="Erick Silva"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="md:hidden relative z-10 text-[18vw] sm:text-7xl font-black flex flex-col items-center leading-none tracking-tighter mb-8 text-center w-full">
        <span className="text-white">Erick</span>
        <span className="text-brand-coral">Silva</span>
      </h2>

      <div className="z-20 w-full px-6 flex flex-col items-center gap-10 md:gap-8 md:block md:absolute md:inset-0 pointer-events-none">
        <div className="pointer-events-auto md:absolute md:top-[65%] md:left-[10%] flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 pb-1 mb-4 md:mb-6 inline-block">
            . Freelancer
          </span>
          <p className="text-white text-lg md:text-2xl max-w-[280px] font-medium leading-tight">
            Disponível para projetos freelance. Entre em contato para
            discutirmos como posso ajudar a tirar sua ideia do papel.
          </p>
        </div>

        <div className="pointer-events-auto md:absolute md:top-[65%] md:right-[10%] flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 pb-1 mb-4 md:mb-6 inline-block">
            . Developer
          </span>
          <p className="text-white text-lg md:text-2xl max-w-[280px] font-medium leading-tight">
            Desenvolvedor full-stack focado em sistemas de automação e criação
            de interfaces web modernas e intuitivas.
          </p>
        </div>
      </div>

      <div className="z-20 mt-10 w-full flex justify-center md:w-auto md:block md:mt-0 md:absolute md:bottom-10 md:left-10 pointer-events-auto">
        <a
          href="/Erick-Santana-Dev.pdf"
          download="Erick-Santana-Dev.pdf"
          className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-brand-coral hover:border-brand-coral transition-all duration-500"
        >
          <div className="text-white group-hover:text-white transition-colors">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-500 group-hover:text-white/80 text-[10px] uppercase font-bold tracking-tighter">
              Currículo
            </span>
            <span className="text-white font-black text-xs uppercase tracking-widest">
              Download PDF
            </span>
          </div>
        </a>
      </div>

      <div className="hidden md:block absolute top-1/4 left-10 w-8 h-8 bg-white/5 rotate-12 z-0"></div>
      <div className="hidden md:block absolute bottom-1/3 right-20 w-12 h-12 bg-white/5 -rotate-12 z-0"></div>
    </main>
  );
}
