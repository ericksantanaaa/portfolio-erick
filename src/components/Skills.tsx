export default function Skills() {
  return (
    <section id="skills" className="bg-dark-card py-24 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 md:gap-0">
          <div className="flex flex-col items-start md:pl-4">
            <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 self-start pb-1 mb-10">
              . tools and design
            </span>

            <ul className="space-y-6 text-white text-[17px] font-light md:mb-12">
              <li>. Git & GitHub</li>
              <li>. Monday</li>
              <li>. Canva PRO</li>
            </ul>

            <div className="hidden md:flex items-center gap-4">
              <span className="text-[75px] font-medium text-brand-coral leading-none tracking-tighter">
                +2
              </span>
              <span className="text-gray-300 text-[11px] font-bold uppercase leading-[1.3] tracking-[0.15em]">
                Years Of <br /> Experience
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div className="flex flex-col items-start w-fit">
              <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 self-start pb-1 mb-10">
                . Command On
              </span>
              <ul className="space-y-6 text-white text-[17px] font-light">
                <li>. React.JS</li>
                <li>. TypeScript</li>
                <li>. Node.JS</li>
                <li>. Tailwind CSS</li>
                <li>. JavaScript</li>
                <li>. HTML & CSS</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end md:pr-4">
            <div className="flex flex-col items-start w-fit">
              <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 self-start pb-1 mb-10">
                . Other knowledge...
              </span>
              <ul className="space-y-6 text-white text-[17px] font-light">
                <li>. Web Design</li>
                <li>. Whatsapp-web.js</li>
                <li>. SQLite</li>
                <li>. React Native</li>
                <li>. Atendimento ao cliente</li>
              </ul>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <span className="text-[75px] font-medium text-brand-coral leading-none tracking-tighter">
              +2
            </span>
            <span className="text-gray-300 text-[11px] font-bold uppercase leading-[1.3] tracking-[0.15em]">
              Years Of <br /> Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
