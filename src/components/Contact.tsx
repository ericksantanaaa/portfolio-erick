export default function Contact() {
  const contactMethods = [
    {
      name: "WhatsApp",
      value: "+55 (15) 98820-3829",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      link: "https://wa.me/5515988203829",
      label: "Conversar agora",
    },
    {
      name: "E-mail",
      value: "contato.ericksilva@outlook.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      link: "mailto:contato.ericksilva@outlook.com?subject=Contato via Portfólio",
      label: "Enviar mensagem",
    },
    {
      name: "LinkedIn",
      value: "in/ericksantanaaa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      link: "https://www.linkedin.com/in/erick-santana-b4610a1ba/?skipRedirect=true",
      label: "Conectar",
    },
    {
      name: "GitHub",
      value: "github.com/ericksantanaaa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      link: "https://github.com/ericksantanaaa",
      label: "Ver repositórios",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-dark-card py-24 w-full relative overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 ">
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-black mt-8 tracking-tighter leading-tight">
            Vamos construir algo <br />{" "}
            <span className="text-brand-coral">incrível juntos?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-transparent border border-white/10 p-8 rounded-2xl hover:border-brand-coral/50 transition-all duration-500 flex flex-col justify-between min-h-[220px] hover:bg-white/[0.02]"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-lg text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-colors duration-500">
                  {method.icon}
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white/20 group-hover:text-brand-coral transition-colors"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </div>

              <div>
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold block mb-2">
                  {method.name}
                </span>
                <h3 className="text-white font-bold text-[15px] md:text-lg tracking-tight mb-1 break-all">
                  {method.value}
                </h3>
                <span className="text-brand-coral text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {method.label} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-coral/5 rounded-full blur-[120px] z-0"></div>
    </section>
  );
}
