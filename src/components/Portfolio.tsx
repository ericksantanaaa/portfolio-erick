import { useState } from "react";
import fotoBot from "../assets/logo-bot.png";
import fotoSite from "../assets/foto-site.png";
import iconeSeta from "../assets/icone-seta.png";

export default function Portfolio() {
  const [openDescription, setOpenDescription] = useState<number | null>(null);

  const projects = [
    {
      title: "AUTOMAÇÃO WHATSAPP",
      subtitle: "TypeScript",
      image: fotoBot,
      description:
        "Criação de um bot inteligente para WhatsApp focado em marketing de afiliados. A ferramenta automatiza o envio de ofertas e links comissionados em grupos, operando de forma autônoma 24/7. Ideal para escala de vendas em marketplaces famosos, eliminando o trabalho manual de postagem e garantindo a frequência exata das publicações.",
    },
    {
      title: "WEB DESIGN",
      subtitle: "Tailwind CSS, TypeScript",
      image: fotoSite,
      description:
        "Desenvolvimento de uma landing page de alta conversão focada em marketing e geração de leads. O projeto foi estruturado para apresentar os serviços de forma estratégica, contando com uma interface intuitiva e botões de chamada para ação (CTA) otimizados para solicitações de orçamento via WhatsApp, aumentando a presença digital da marca.",
    },
  ];

  return (
    <section id="services" className="bg-dark-bg py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 flex flex-col items-start">
            <h2 className="text-brand-coral text-3xl font-bold mb-2">
              My Projects
            </h2>
            <h3 className="text-white text-4xl font-black mb-10 tracking-tight">
              Portfolio
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xs">
              Estes são alguns projetos selecionados onde foquei em interfaces
              modernas e sistemas de automação.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xs">
              Gostou do que viu? Entre em contato para discutirmos suas ideias.
            </p>
            <a
              href="https://github.com/ericksantanaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-coral font-bold flex items-center gap-2 group"
            >
              View more
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="md:w-2/3 flex flex-col md:flex-row gap-8">
            {projects.map((project, index) => (
              <div key={index} className="flex-1 relative group">
                <div className="rounded-2xl overflow-hidden bg-dark-card border border-white/5 aspect-[4/3] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-white text-xl font-bold">
                    {project.title}
                  </h4>
                  <button
                    onClick={() =>
                      setOpenDescription(
                        openDescription === index ? null : index,
                      )
                    }
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                  >
                    <img
                      src={iconeSeta}
                      alt="Ver descrição"
                      className={`w-5 h-5 transition-transform duration-300 ${openDescription === index ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                </div>

                <p className="text-gray-400">{project.subtitle}</p>

                {openDescription === index && (
                  <div className="absolute z-30 top-full mt-4 left-0 w-full p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white/5 border-l border-t border-white/10 rotate-45 backdrop-blur-md"></div>

                    <p className="text-white text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
