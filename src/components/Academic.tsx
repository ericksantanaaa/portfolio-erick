import logoFacens from "../assets/logo-facens.jpg";
import logoEtec from "../assets/logo-etec.png";
import logoAssociacao from "../assets/logo-associacao.png";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Importação do Lottie

export default function Academic() {
  const courses = [
    {
      title: "Engenharia da Computação",
      institution: ". Centro Universitário Facens",
      period: "2021 - 2025",
      logo: logoFacens,
    },
    {
      title: "Técnico em Eletrônica",
      institution: ". ETEC Rubens de Faria e Souza",
      period: "2018 - 2020",
      logo: logoEtec,
    },
    {
      title: "Hardware de Computadores",
      institution: ". Associação Ser Consciente",
      period: "2017",
      logo: logoAssociacao,
    },
    {
      title: "Informática Básica",
      institution: ". Associação Ser Consciente",
      period: "2016",
      logo: logoAssociacao,
    },
  ];

  return (
    <section id="academic" className="bg-dark-bg py-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Container principal flexível (Lado a lado no Desktop, Empilhado no Mobile) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LADO ESQUERDO: Lista de Escolaridades */}
          <div className="flex flex-col gap-12 w-full md:w-2/3 max-w-4xl">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group flex items-center gap-8 border-l border-white/10 pl-8 hover:border-brand-coral transition-colors duration-500"
              >
                <div className="w-25 h-25 shrink-0 rounded-xl bg-dark-card border border-white/5 flex items-center justify-center overflow-hidden p-2 relative">
                  {course.logo ? (
                    <img
                      src={course.logo}
                      alt={course.institution}
                      className="w-full h-full object-contain transition-all duration-500"
                    />
                  ) : (
                    <div className="text-brand-coral/40 font-black text-xl">
                      EDU
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-brand-coral font-bold uppercase tracking-widest text-[11px] mb-1">
                    {course.institution}
                  </span>
                  <h4 className="text-white text-2xl md:text-3xl font-black tracking-tighter leading-none group-hover:text-brand-coral transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-gray-500 font-medium mt-2 text-sm uppercase tracking-wider">
                    {course.period}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* LADO DIREITO: Animação Lottie */}
          <div className="w-full md:w-1/3 flex justify-center items-center mt-12 md:mt-0">
            <DotLottieReact
              src="https://lottie.host/b97e378b-976d-4f26-9c1f-c76810862ca3/HBT2zSzgg2.lottie"
              loop
              autoplay
              className="w-[350px] md:w-[450px] lg:w-[600px] opacity-90"
            />
          </div>

        </div>
      </div>

      <div className="absolute top-1/2 -right-20 w-64 h-64 bg-brand-coral/5 rounded-full blur-[120px] z-0"></div>
    </section>
  );
}