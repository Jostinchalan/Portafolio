import { GraduationCap, Award, Book } from 'lucide-react';

export function Education() {
  const education = {
    degree: 'Ingeniería en Software',
    institution: 'Universidad Estatal de Milagro (UNEMI)',
    period: '2021 - Presente',
    semester: 'Octavo Semestre',
    description: 'Estudiante de Ingeniería en Software, responsable y proactivo, con disposición para aprender, trabajar en equipo y aplicar conocimientos en el área tecnológica.',
    previousEducation: [
      {
        level: 'Bachiller Técnico de Servicios',
        institution: 'Unidad Educativa Naranjito',
        specialty: 'Informática',
        completed: true
      },
      {
        level: 'Educación Básica',
        institution: 'Escuela Particular Ecuador Histórico',
        specialty: '',
        completed: true
      }
    ]
  };

  const certifications = [
    {
      id: 1,
      title: 'Cloud Computing Desde Cero',
      issuer: 'Universidad Estatal de Milagro',
      year: '11-11-2025',
      hours: '40 Horas',
      icon: Award
    },
    {
      id: 2,
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      year: '04-30-2025',
      hours: '20 Horas',
      icon: Award
    },
    {
      id: 3,
      title: 'Introducción a la nube con Google Cloud Platform',
      issuer: 'Universidad Estatal de Milagro',
      year: '01-03-2026',
      hours: '40 Horas',
      icon: Award
    }
  ];

  return (
    <section id="educacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Educación
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mi formación académica y certificaciones profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Educación Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-1">
                    {education.institution}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-1">
                    {education.period}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">
                    {education.semester}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {education.description}
              </p>

              {/* Educación Anterior */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Book className="text-slate-700 dark:text-slate-300" size={20} />
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Formación Previa
                  </h4>
                </div>
                <div className="space-y-3">
                  {education.previousEducation.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <h5 className="font-bold text-slate-900 dark:text-white mb-1">
                        {edu.level}
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {edu.institution}
                      </p>
                      {edu.specialty && (
                        <p className="text-slate-500 dark:text-slate-500 text-sm">
                          Especialidad: {edu.specialty}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-yellow-600 dark:text-yellow-400" size={28} />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Certificaciones
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                        <cert.icon className="text-yellow-600 dark:text-yellow-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          Fecha: {cert.year}
                        </p>
                        {cert.hours && (
                          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                            Horas: {cert.hours}
                          </p>
                        )}

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Badge de estudiante */}
              <div className="mt-6 p-4 bg-gradient-to-r bg-blue-600 rounded-lg text-white text-center">
                <p className="font-bold mb-1">Estudiante Activo</p>
                <p className="text-sm opacity-90">Octavo Semestre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}