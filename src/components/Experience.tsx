import logoBradesco from "../assets/logo-bradesco.png";
import logoBv from "../assets/logo-bv.png";
import logoAfinz from "../assets/logo-afinz.jpg";

export default function Experience() {
  const experiences = [
    {
      company: "Chain Serviços e Contact Center S.A",
      role: "Operador de Teleatendimento TR",
      period: " 09/2021 – 03/2023",
      description:
        "Suporte ao aplicativo bancário (Bradesco. Responsável por diagnosticar e solucionar problemas de acesso e falhas de navegação enfrentados pelos. Além da resolução técnica, executava operações bancárias rotineiras como parcelamentos, antecipações e emissão de faturas, focado na experiência do cliente. ",
      logo: logoBradesco,
    },
    {
      company: "NovaQuest Contact Center LTDA",
      role: "Operador de Telecobrança TR",
      period: "02/2024 – 09/2024",
      description:
        "Recuperação de crédito por meio de contato ativo com clientes com atrasos superiores a um ano em financiamentos de veículos. Responsável por conduzir negociações, apresentar propostas estratégicas de desconto e aplicar técnicas de comunicação para reverter objeções, com foco direto na conversão de acordos e quitação de pendências.",
      logo: logoBv,
    },
    {
      company: "AlphaMoney Promotora de Vendas LTDA",
      role: "Operador Relacionamento Cliente I",
      period: "10/2025 – 12/2025",
      description:
        "Atuação no atendimento receptivo prestando suporte aos clientes para o esclarecimento de dúvidas e orientação geral. Responsável pela gestão e abertura de protocolos de atendimento, além do fornecimento de soluções ágeis logo no primeiro contato, com foco em garantir a eficiência operacional e a satisfação do usuário.",
      logo: logoAfinz,
    },
  ];

  return (
    <section id="experience" className="bg-dark-card py-24 w-full border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-30">
          {experiences.map((exp, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col items-center text-center w-full md:max-w-[280px]">
                <div className="mb-6 w-20 h-20 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-white/10 group relative shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>

                <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 pb-1 mb-6">
                  {exp.company}
                </span>

                <h4 className="text-white text-xl font-bold mb-2 tracking-tight">
                  {exp.role}
                </h4>
                <span className="text-brand-coral/80 text-[12px] font-medium uppercase tracking-widest mb-6">
                  {exp.period}
                </span>

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