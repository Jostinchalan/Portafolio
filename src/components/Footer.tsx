import { Heart, Github, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Jostinchalan',
      icon: Github
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fernan_jostin',
      icon: Instagram
    },
    {
      name: 'Email',
      url: 'mailto:jostinmora740@gmail.com',
      icon: Mail
    }
  ];

  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Experiencia', href: '#experiencia' }
      ]
    },
    {
      title: 'Más',
      links: [
        { name: 'Educación', href: '#educacion' },
        { name: 'Contacto', href: '#contacto' }
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre mí */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Jostin Fernando Chalan Mora
            </h3>
            <p className="text-slate-400 mb-4">
              Estudiante de Ingeniería en Software, responsable y proactivo, con disposición para aprender, 
              trabajar en equipo y aplicar conocimientos en el área tecnológica.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © {currentYear} Jostin Chalan Mora. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}