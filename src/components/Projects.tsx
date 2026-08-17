import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'EcoScam - Clasificación de Residuos',
      description: 'Aplicación innovadora enfocada en la clasificación inteligente de residuos para promover el reciclaje y cuidado del medio ambiente.',
      image: '/EcoScam.png',
      imageStyle: 'contain',
      technologies: ['Python', 'Machine Learning', 'Web'],
      github: 'https://github.com/Jostinchalan/EcoScam---Clasificacion-de-Residuos',
      demo: '#',
      category: 'Eco-Tech / AI'
    },
    {
      id: 2,
      title: 'CUENTIA',
      description: 'Sistema de gestión de cuentas desarrollado para facilitar el control y administración de información de manera eficiente y segura.',
      image: '/CuentIA.png',
      imageStyle: 'cover',
      technologies: ['Django', 'JavaScript', 'Python', 'CSS'],
      github: 'https://github.com/Jostinchalan/CUENTIA.git',
      demo: '#',
      category: 'Web Application'
    },
    {
      id: 3,
      title: 'AgroMercado',
      description: 'Plataforma digital para conectar agricultores con compradores, facilitando la venta directa de productos agrícolas frescos y de calidad.',
      image: '/AgroMercado.png',
      imageStyle: 'cover',
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/Jostinchalan/AgroMercado.git',
      demo: 'https://agro-mercado.vercel.app/',
      category: 'E-commerce'
    },
    {
      id: 4,
      title: 'GUIOSPRO-FLOSS',
      description: 'Plataforma orientada al ecosistema del Software Libre y de Código Abierto (FLOSS) para la comunidad de desarrolladores.',
      image: '/GuiosPro.png',
      imageStyle: 'contain',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/Jostinchalan/GUIOSPRO-FLOSS',
      demo: 'https://guiospro-floss-1vve.vercel.app/',
      category: 'Open Source'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Una colección de mis trabajos más recientes y significativos como estudiante de Ingeniería de Software en UNEMI
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-white flex items-center justify-center">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`transition-transform duration-300 hover:scale-110 ${
                    project.imageStyle === 'contain' 
                      ? 'w-3/4 h-3/4 object-contain' 
                      : 'absolute inset-0 w-full h-full object-cover'
                  }`}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {project.category}
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Visualizar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}