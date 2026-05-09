export default function Skills() {
  return (
    <section className="bg-dark-card py-24 w-full">

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">
          
          <div className="flex flex-col items-start md:pl-4">
            <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 self-start pb-1 mb-10">
              . Working Experience
            </span>
            <p className="text-white text-[17px] leading-[1.8] font-light mb-12">
              . Cooperated closely <br />
              with the marketing team <br />
              to develop concepts <br />
              and mockups on 50+ <br />
              projects.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-[75px] font-medium text-brand-coral leading-none tracking-tighter">
                +6
              </span>
              <span className="text-gray-300 text-[11px] font-bold uppercase leading-[1.3] tracking-[0.15em]">
                Years Of <br /> Experience
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-start w-fit">
                <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 self-start pb-1 mb-10">
                . Command On
                </span>
                <ul className="space-y-6 text-white text-[17px] font-light">
                <li>.HTML</li>
                <li>.CSS</li>
                <li>.Enterprise CMS</li>
                <li>.Visual Studio</li>
                <li>.Adobe Creative Cloud</li>
                </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end md:pr-4">
            <div className="flex flex-col items-start w-fit">
                <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[11px] border-b border-brand-coral/50 self-start pb-1 mb-10">
                . Skills In
                </span>
                <ul className="space-y-6 text-white text-[17px] font-light">
                <li>. Web Designing</li>
                <li>. App Designing</li>
                <li>. Dashboard Designing</li>
                <li>. Development</li>
                <li>. Video Editing</li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}