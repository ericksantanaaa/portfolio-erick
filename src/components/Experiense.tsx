// src/components/Experience.tsx
import logoBradesco from "../assets/logo-bradesco.png"; 
import logoBv from "../assets/logo-bv.png"; 
import logoAfinz from "../assets/logo-afinz.jpg";

export default function Experience() {
  const experiences = [
    {
      company: ". Tech Solutions",
      role: "Full Stack Developer",
      period: "2022 - Present",
      description: "Desenvolvimento de sistemas robustos utilizando React e Node.js, focando em escalabilidade e performance de dashboards.",
      logo: logoBradesco,
    },
    {
      company: ". Creative Studio",
      role: "UI/UX Designer",
      period: "2020 - 2022",
      description: "Criação de interfaces modernas e protótipos interativos para aplicativos mobile, garantindo a melhor experiência do usuário.",
      logo: logoBv,
    },
    {
      company: ". Digital Marketing Co.",
      role: "Frontend Specialist",
      period: "2018 - 2020",
      description: "Responsável pela manutenção de sites institucionais e implementação de animações avançadas com CSS e Tailwind.",
      logo: logoAfinz,
    },
  ];

  return (
    <section className="bg-dark-card py-24 w-full border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-30">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex justify-center" // Garante que o bloco de 280px fique no centro do seu espaço de 1/3 da tela
            >
              {/* CONTAINER DO CONTEÚDO: Agora tudo aqui dentro é alinhado ao centro */}
              <div className="flex flex-col items-center text-center w-full md:max-w-[280px]">
                
                {/* LOGO DA EMPRESA */}
                <div className="mb-6 w-20 h-20 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-white/10 group relative shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-3 filter grayscale group-hover:grayscale-0 transition-all duration-300 z-10 relative"
                  />
                </div>

                {/* CABEÇALHO */}
                <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 pb-1 mb-6">
                  {exp.company}
                </span>

                {/* CARGO E PERÍODO */}
                <h4 className="text-white text-xl font-bold mb-2 tracking-tight">
                  {exp.role}
                </h4>
                <span className="text-brand-coral/80 text-[12px] font-medium uppercase tracking-widest mb-6">
                  {exp.period}
                </span>

                {/* DESCRIÇÃO - Alinhada ao centro para bater com a logo */}
                <p className="text-white text-[15px] leading-[1.8] font-light mb-12 text-justify">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}