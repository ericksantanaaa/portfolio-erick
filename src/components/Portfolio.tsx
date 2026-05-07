export default function Portfolio() {
  const projects = [
    {
      title: "Ford Website Landing Page.",
      subtitle: "Design & Prototype",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", // Substitua pelas suas imagens
    },
    {
      title: "Digital Agency Landing Page.",
      subtitle: "Design & Prototype",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="bg-dark-bg py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* LADO ESQUERDO: Textos */}
          <div className="md:w-1/3 flex flex-col items-start">
            <h2 className="text-brand-coral text-3xl font-bold mb-2">My Projects</h2>
            <h3 className="text-white text-4xl font-black mb-10 tracking-tight">Portfolio</h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xs">
              These are my few selected projects where I designed the User interface to build a clickable prototype.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xs">
              Like what you've seen so far? Then get in touch, and we discuss your ideas together.
            </p>
            
            <a href="#" className="text-brand-coral font-bold flex items-center gap-2 group">
              View All 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          {/* LADO DIREITO: Cards de Projetos */}
          <div className="md:w-2/3 flex flex-col md:flex-row gap-8 overflow-hidden">
            {projects.map((project, index) => (
              <div key={index} className="flex-1 group cursor-pointer">
                <div className="rounded-2xl overflow-hidden bg-dark-card border border-white/5 aspect-[4/3] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-white text-xl font-bold mb-1">{project.title}</h4>
                <p className="text-gray-400">{project.subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}