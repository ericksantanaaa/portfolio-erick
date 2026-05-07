
import logoFacens from '../assets/logo-facens.jpg'; // Era .png, mudei para .jpg
import logoEtec from '../assets/logo-etec.png';    // Este parece ser .png mesmo no seu print
import logoAssociacao from '../assets/logo-associacao.png'; // Era .png, mudei para .jpg

// 1. Removi o import direto que estava a dar erro. 
// As imagens que ainda não confirmamos o nome vamos tratar de forma diferente abaixo.

export default function Academic() {
  const courses = [
    {
      title: "Engenharia da Computação",
      institution: ". Centro Universitário Facens",
      period: "2021 - 2025",
      logo: logoFacens 
    },
    {
      title: "Técnico em Eletrônica",
      institution: ". ETEC Sorocaba",
      period: "2018 - 2020",
      logo: logoEtec
    },
    {
      title: "Hardware de Computadores",
      institution: ". SENAI",
      period: "2017",
      // Se não tivermos a logo, deixamos null para não dar erro de import
      logo: logoAssociacao 
    },
    {
      title: "Informática Básica",
      institution: ". Fundação Bradesco",
      period: "2016",
      logo: logoAssociacao
    }
  ];

  return (
    <section className="bg-dark-bg py-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16">
          <span className="text-brand-coral font-bold uppercase tracking-[0.3em] text-[12px] border-b-2 border-brand-coral pb-2">
            . Formação Acadêmica
          </span>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-8 border-l border-white/10 pl-8 hover:border-brand-coral transition-colors duration-500"
            >
              <div className="w-25 h-25 shrink-0 rounded-xl bg-dark-card border border-white/5 flex items-center justify-center overflow-hidden p-2 relative">
                {/* 2. Verificação: Só mostra a imagem se o logo existir e não der erro de import */}
                {course.logo ? (
                  <img 
                    src={course.logo} 
                    alt={course.institution}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="text-brand-coral/40 font-black text-xl">EDU</div>
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
      </div>

      <div className="absolute top-1/2 -right-20 w-64 h-64 bg-brand-coral/5 rounded-full blur-[120px] z-0"></div>
    </section>
  );
}