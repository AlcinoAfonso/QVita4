export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#7A8AD6] font-inter">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 mb-24">
        <a href="/" className="block">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
            alt="Logo Angelo Coviello"
            className="h-12 w-auto"
          />
        </a>
        <nav className="flex gap-8">
          <a href="#sec-como-funciona" className="text-base text-white hover:underline">
            <small>Etapas</small>
          </a>
          <a href="#sec-quem-somos" className="text-base text-white hover:underline">
            <small>Quem é Angelo Coviello</small>
          </a>
        </nav>
      </header>
      
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-15 mb-24 bg-[#7A8AD6] rounded-[16px]">
        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          <h1 className="text-[2.5rem] font-bold leading-[1.2] tracking-tight font-inter text-white">
            Medicina Quântica Segura Com Tecnologia de Ponta
          </h1>
          <p className="text-[1.25rem] font-semibold leading-[1.4] tracking-normal font-inter text-white">
            Terapia Quântica não invasiva, reconhecida na Europa e aplicada com precisão por profissional experiente.
          </p>
          <a
            href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-base font-semibold leading-[1.4] tracking-tight font-inter px-8 py-4 rounded-[16px] bg-green-600 text-white shadow hover:bg-green-700 transition"
          >
            Entenda os Benefícios
          </a>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
            alt="Angelo Coviello"
            className="rounded-[16px] w-full max-w-xs shadow"
          />
        </div>
      </section>
    </div>
  );
}
