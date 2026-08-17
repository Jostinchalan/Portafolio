import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Instagram } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jostinmora740@gmail.com',
      href: 'mailto:jostinmora740@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+593 98 060 1334',
      href: 'https://wa.me/593980601334'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Jostinchalan',
      href: 'https://github.com/Jostinchalan'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@iam.jostin2',
      href: 'https://www.instagram.com/iam.jostin2'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío (en producción, aquí se conectaría con el backend Django)
    setTimeout(() => {
      setSubmitMessage('¡Mensaje enviado con éxito! Te responderé pronto.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Contáctame
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Información de Contacto
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Estoy disponible para oportunidades de colaboración, proyectos freelance, o simplemente para una charla sobre tecnología.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <info.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {info.label}
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Mapa o imagen decorativa */}
            <div className="mt-8 p-6 bg-gradient-to-br bg-blue-600 rounded-xl text-white">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={24} />
                <h4 className="font-bold text-lg">Ubicación</h4>
              </div>
              <p>Naranjito, Ecuador</p>
              <p className="text-sm mt-2 opacity-90">
                Disponible para trabajo remoto y oportunidades presenciales
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Envíame un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Asunto */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="Asunto del mensaje"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 resize-none text-slate-900 dark:text-white"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg transition-colors duration-200 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {/* Mensaje de confirmación */}
              {submitMessage && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 text-center">
                    {submitMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
