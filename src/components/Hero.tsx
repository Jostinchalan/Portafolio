import { Github, Instagram, Mail } from "lucide-react";

export function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Jostinchalan",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/iam.jostin2",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:jostinmora740@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl font-semibold mb-4">
              Hola, soy
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Jostin Fernando Chalan Mora
            </h1>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 mb-6">
              Estudiante de Ingeniería en Software
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              "Ingeniero de Software en formación, 
              preparado para aplicar mis conocimientos en proyectos reales. 
              Innovar, aprender y crear es mi enfoque."
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Contáctame
              </a>
              <a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#proyectos")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg transition-colors duration-200"
              >
                Ver Proyectos
              </a>
            </div>

            {/* Enlaces sociales */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Foto de perfil */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-300 dark:border-slate-700 shadow-2xl">
                <img
                  src="/foto_perfil.png"
                  alt="Jostin Fernando Chalan Mora"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}