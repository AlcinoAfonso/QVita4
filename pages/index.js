import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Check, ArrowRight, Play, Users, Zap, Shield, TrendingUp, Brain, Scale, RotateCcw, Sprout, MessageCircle, FileText, Camera, Rocket, User, Youtube, ChevronDown } from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = (message) => {
    const url = `https://wa.me/5521979658483?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const beneficios = [
    {
      icon: "🧘‍♀️",
      title: "Alívio Progressivo do Estresse",
      desc: "Sinta a diferença no seu ritmo interno. O tratamento busca favorecer um estado de maior equilíbrio e tranquilidade ao longo do tempo."
    },
    {
      icon: "⚡",
      title: "Energia Renovada para Seu Dia a Dia",
      desc: "Muitos relatam melhora gradual na disposição. A terapia energética pode colaborar com o equilíbrio no cotidiano."
    },
    {
      icon: "🛡️",
      title: "Fortalecimento do Sistema Imunológico",
      desc: "O equilíbrio energético pode melhorar o funcionamento do organismo. Muitas pessoas relatam bem-estar durante o processo."
    },
    {
      icon: "🌙",
      title: "Melhora na Qualidade do Sono",
      desc: "Alguns clientes percebem mudanças positivas no sono, como sensação de descanso mais profundo e regular."
    },
    {
      icon: "🧠",
      title: "Aumento da Clareza Mental",
      desc: "O reequilíbrio energético pode favorecer estados de maior concentração, contribuindo para decisões mais conscientes no dia a dia."
    },
    {
      icon: "💖",
      title: "Harmonia Emocional Duradoura",
      desc: "O tratamento atua de forma sutil no campo emocional, podendo favorecer estabilidade interna e maior percepção de equilíbrio ao longo do tempo."
    }
  ];

  const etapas = [
    {
      icon: "🗂️",
      title: "1. Receba o material de orientação",
      desc: "Após a contratação, você recebe um e‑mail com um vídeo explicativo e o link para o formulário de planejamento."
    },
    {
      icon: "📝",
      title: "2. Defina seus objetivos no formulário",
      desc: "Descreva até dois tratamentos e detalhe suas necessidades; essas informações serão a base do planejamento personalizado."
    },
    {
      icon: "📸",
      title: "3. Envie sua foto digital",
      desc: "A fotografia conecta seu campo energético ao sistema, permitindo a análise com o diodo de ruído branco e a identificação de desequilíbrios."
    },
    {
      icon: "🚀",
      title: "4. Início do tratamento e acompanhamento",
      desc: "Seu tratamento começa em até 4 dias úteis; as frequências vibracionais atuam dia e noite, você recebe relatórios por e‑mail e conta com suporte via WhatsApp para esclarecer dúvidas."
    }
  ];

  const faqs = [
    {
      q: "Precisa de consulta para tratamento de medicina quântica?",
      a: "Não. O processo é iniciado com um formulário digital e envio de foto. Não há necessidade de consulta presencial."
    },
    {
      q: "Como o Quantec analisa minha energia?",
      a: "Ele escaneia seu campo vibracional, comparando com um banco de dados de frequências saudáveis para sugerir ajustes necessários."
    },
    {
      q: "A terapia quântica é segura? Existem efeitos colaterais?",
      a: "Sim, nossa terapia é completamente segura e não invasiva. Não há efeitos colaterais conhecidos, pois trabalhamos apenas com frequências naturais para harmonizar seu corpo."
    },
    {
      q: "O Quantec realmente funciona?",
      a: "Muitos clientes relatam melhorias já nas primeiras semanas. No entanto, recomendamos um tratamento mínimo de 3 meses para resultados mais profundos e duradouros."
    },
    {
      q: "Posso fazer a terapia quântica junto com outros tratamentos?",
      a: "Absolutamente! Nossa terapia é complementar e pode potencializar os efeitos de outros tratamentos. Sempre informe seu médico sobre todas as terapias que está realizando."
    },
    {
      q: "Como é realizado o tratamento à distância?",
      a: "Utilizamos tecnologia avançada que permite enviar frequências vibracionais específicas para você, independentemente de sua localização. Não é necessário estar fisicamente presente."
    },
    {
      q: "Qual a diferença entre Quantum Vita e outras terapias alternativas?",
      a: "Utilizamos tecnologia Quantec de ponta, oferecendo tratamentos personalizados e baseados em princípios da física quântica, com resultados mensuráveis."
    },
    {
      q: "A terapia quântica pode tratar problemas emocionais?",
      a: "Sim, nossa abordagem holística trabalha com o equilíbrio energético, que impacta diretamente nas emoções. Muitos clientes relatam melhora significativa em questões emocionais."
    }
  ];

  const depoimentos = [
    "Depoimento: Tratamento de Autismo",
    "Depoimento: Melhora no Déficit de Atenção, Prosperidade e no Quadro Psicótico Infantil",
    "Depoimento de Cliente",
    "QUANTEC: Depoimento de cliente - segundo mês de terapia",
    "Relato de Cliente",
    "Depoimento: tratamento da depressão, ansiedade, estresse. Potencializando prosperidade financeira"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      
      {/* Header */}
      <header className="relative z-50 bg-[#7A8AD6] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg" 
                alt="Logo Angelo Coviello" 
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('sec-como-funciona')}
                className="text-white hover:text-blue-100 transition-colors text-sm"
              >
                Etapas
              </button>
              <button 
                onClick={() => scrollToSection('sec-quem-somos')}
                className="text-white hover:text-blue-100 transition-colors text-sm"
              >
                Quem é Angelo Coviello
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#7A8AD6] pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Medicina Quântica Segura Com 
                <span className="block text-blue-100">Tecnologia de Ponta</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Terapia Quântica não invasiva, reconhecida na Europa e aplicada com precisão por profissional experiente.
              </h2>
              
              <button
                onClick={() => handleWhatsApp('Gostaria de saber mais sobre a terapia')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Entenda os Benefícios</span>
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp" 
                alt="Angelo Coviello"
                className="rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Terapia Quântica: Como Funciona
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">🧠</span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A terapia busca identificar padrões sutis — emocionais, mentais, físicos ou energéticos — que influenciam a vida da pessoa, mesmo sem que ela perceba de forma consciente.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">⚖️</span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Esses desequilíbrios podem estar por trás de conflitos, bloqueios ou desconfortos. Lidar com essas causas ajuda a promover mudanças reais no cotidiano.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">🔄</span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Cada pessoa reage de forma única, por isso os resultados podem variar de acordo com a experiência e o momento de cada um.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">🌱</span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A terapia não é uma promessa, mas tende a funcionar melhor quando há abertura para se observar, escutar a si mesmo e aplicar pequenas mudanças conscientes no seu dia a dia.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp" 
                alt="Quantec Technology"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Os Benefícios da Energia Quântica no seu dia a dia
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{beneficio.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{beneficio.title}</h3>
                <p className="text-gray-600 leading-relaxed">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia Quantec */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Entenda o Quantec
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                    <span className="mr-3">🧠</span>
                    Tecnologia Alemã Avançada
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Dispositivo exclusivo de biocomunicação instrumental, usado à distância, sem medicamentos ou procedimentos físicos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                    <span className="mr-3">🔍</span>
                    Leitura do Campo Energético
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Com uma fotografia digital, o sistema acessa padrões mentais, emocionais, físicos e energéticos. A leitura é feita por um sensor que capta informações do inconsciente.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                    <span className="mr-3">🌐</span>
                    Ajustes Frequenciais com Acompanhamento
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    As frequências vibracionais são programadas pelo terapeuta no início do tratamento e atuam automaticamente, dia e noite.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
                    <span className="mr-3">🏆</span>
                    Reconhecimento e Precisão
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Premiado na Europa como Inovação em Saúde. Combina ciência, tecnologia e acompanhamento profissional para um tratamento personalizado.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp" 
                alt="Quantec Device"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Etapas do Tratamento */}
      <section id="sec-como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Etapas do Tratamento
            </h2>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl flex-shrink-0">{etapa.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{etapa.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{etapa.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => handleWhatsApp('Gostaria de saber mais sobre a terapia')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Entenda os Benefícios</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sec-quem-somos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="https://quantecportal.com/wp-content/uploads/2025/02/terapeuta-quantec-300x231.jpg" 
                alt="Angelo Coviello - Terapeuta"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 max-w-md w-full"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Quem é Angelo Coviello
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Angelo Coviello é terapeuta especializado em terapias quânticas, vibracionais e holísticas. Com mais de 8 anos de experiência, integra o uso do aparelho Quantec em protocolos voltados ao bem-estar.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Responsável pelos atendimentos deste site, atua com foco no equilíbrio energético e na harmonização entre corpo, mente e emoções. Utiliza abordagens reconhecidas para favorecer estados de saúde e estabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Depoimentos de Clientes
            </h2>
            <p className="text-xl text-gray-600">Veja os resultados reais de quem já experimentou</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-center mb-4">
                  <Youtube className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center leading-tight">
                  {depoimento}
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">Clique para assistir</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Perguntas Frequentes (FAQ)
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#7A8AD6] to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Veja como funciona antes de decidir pelo tratamento
          </h2>
          <h3 className="text-xl text-blue-100 mb-12 leading-relaxed">
            O processo com o Quantec é claro: dados objetivos, etapas bem definidas e total respeito ao seu ritmo pessoal.
          </h3>
          
          <button
            onClick={() => handleWhatsApp('Gostaria de saber mais sobre a terapia')}
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Saiba como é feito na prática</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg" 
              alt="Logo Angelo Coviello" 
              className="h-12 w-auto mx-auto mb-6"
            />
            <p className="text-gray-400">
              &copy; 2025 Angelo Coviello - Medicina Quântica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
