export default function Footer() {
  return (
    <footer className="bg-dark-bg py-12 border-t border-white/5 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © 2026 Erick Silva. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-sm italic">
          Developed with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}