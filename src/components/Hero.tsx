// src/components/Hero.tsx

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden">
      
      {/* 1. NOMES GRANDES AO FUNDO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-[12vw] font-black flex gap-[30vw] leading-none tracking-tighter">
          <span className="text-white opacity-95">Erick</span>
          <span className="text-brand-coral opacity-95">Silva</span>
        </h2>
      </div>

      {/* 2. CÍRCULO CENTRAL (Fica em cima dos nomes mas atrás dos textos menores) */}
      <div className="relative z-10">
        <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border-[12px] border-dark-card bg-[#222] shadow-2xl flex items-center justify-center overflow-hidden">
          <span className="text-gray-600 font-bold uppercase tracking-widest text-xs opacity-40">
            Sua Foto Aqui
          </span>
        </div>
      </div>

      {/* 3. TEXTOS FLUTUANTES (Posicionados absolutamente na tela) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="container mx-auto h-full relative">
          
          {/* Bloco Freelancer (Esquerda) */}
          <div className="absolute top-[65%] left-[5%] md:left-[10%] pointer-events-auto">
            <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 pb-1 mb-6 inline-block">
              . Freelancer
            </span>
            <p className="text-white text-xl md:text-2xl max-w-[280px] font-medium leading-tight">
              Get in touch for freelance projects.
            </p>
          </div>

          {/* Bloco Developer (Direita) */}
          <div className="absolute top-[65%] right-[5%] md:right-[10%] pointer-events-auto text-left">
            <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 pb-1 mb-6 inline-block">
              . Developer
            </span>
            <p className="text-white text-xl md:text-2xl max-w-[280px] font-medium leading-tight">
              Erick Santana, a full-stack developer based in Brazil, with a
              strong focus on automation systems and modern web interfaces.
            </p>
          </div>

        </div>
      </div>

      {/* ELEMENTOS DECORATIVOS */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-white/5 rotate-12 z-0"></div>
      <div className="absolute bottom-1/3 right-20 w-12 h-12 bg-white/5 -rotate-12 z-0"></div>
    </main>
  );
}