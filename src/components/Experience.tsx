import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Técnico de Soporte y Mantenimiento de Equipos',
      company: 'Asistencia Técnica PC',
      period: '10/02/2022 - 16/04/2025',
      description: 'Responsable del soporte técnico integral, mantenimiento de equipos de cómputo y atención al cliente.',
      achievements: [
        'Instalación y configuración de sistemas operativos y software',
        'Mantenimiento preventivo y correctivo de equipos de cómputo',
        'Diagnóstico y solución de fallas de hardware y software',
        'Soporte técnico a usuarios y atención al cliente',
        'Configuración básica de redes y periféricos'
      ],
      type: 'professional'
    },
    {
      id: 2,
      title: 'Pasante Administrativo',
      company: 'Universidad Estatal de Milagro',
      period: '96 Horas',
      description: 'Prácticas preprofesionales en el área de Dirección de Operaciones Tecnológicas y de Laboratorios.',
      achievements: [
        'Mantenimientos preventivos y correctivos de equipos tecnológicos',
        'Inventario de equipos tecnológicos y mobiliarios',
        'Configuración y optimización de equipos',
        'Instalación de software y hardware'
      ],
      type: 'internship'
    },
    {
      id: 3,
      title: 'Pasante Administrativo',
      company: 'Universidad Estatal de Milagro',
      period: '18 Días',
      description: 'Prácticas profesionales en el área de Dirección de Tecnologías de Información y Comunicaciones',
      achievements: [
        'Participación en el desarrollo y mantenimiento de aplicaciones web institucionales.',
        'Colaboración en la optimización y mejora de bases de datos.',
        'Implementación de mejoras en los sistemas de gestión interna.',
        'Soporte técnico en el área de tecnologías de la información y resolución deincidencias.',
        'Documentación de procedimientos y manuales técnicos para usuarios.'
      ],
      type: 'internship'
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experiencia
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mi trayectoria desarrollando proyectos y adquiriendo experiencia práctica
          </p>
        </div>

        {/* Timeline de experiencias */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700"></div>

          {/* Experiencias */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Punto en el timeline */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>

                {/* Espaciador */}
                <div className="hidden md:block w-1/2"></div>

                {/* Contenido de la experiencia */}
                <div className="md:w-1/2">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Encabezado */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Período */}
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Logros */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Logros principales:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}