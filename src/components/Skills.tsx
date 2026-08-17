import { Code2, Database, Server, Wrench, Cloud, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
      color: 'blue'
    },
    {
      name: 'Backend',
      icon: Server,
      skills: ['Python', 'Django', 'Node.js', 'Django REST Framework', 'API REST'],
      color: 'green'
    },
    {
      name: 'Bases de Datos',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL'],
      color: 'purple'
    },
    {
      name: 'Herramientas',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
      color: 'orange'
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Cloud Computing'],
      color: 'cyan'
    },
    {
      name: 'Hardware & IoT',
      icon: Globe,
      skills: ['Arduino', 'ESP32', 'Redes', 'Soporte Técnico'],
      color: 'red'
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
      green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400' },
      purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400' },
      orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400' },
      cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400' },
      red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400' },
    };
    return colors[color];
  };

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para desarrollar soluciones completas
          </p>
        </div>

        {/* Grid de categorías de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.name}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Encabezado de categoría */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <category.icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Lista de habilidades */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 bg-gradient-to-r bg-blue-600 rounded-xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-bold">Habilidades Blandas</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Trabajo en Equipo',
              'Resolución de Problemas',
              'Comunicación',
              'Proactividad',
              'Responsabilidad',
              'Autodidacta'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-colors duration-200"
              >
                <span className="font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}