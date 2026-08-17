import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! 👋 Soy el asistente virtual de Jostin. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Respuestas sobre proyectos
    if (lowerMessage.includes('proyecto') || lowerMessage.includes('trabajos')) {
      return 'Jostin ha trabajado en varios proyectos destacados:\n\n1. ♻️ EcoScam - Clasificación inteligente de residuos\n2. 💼 CUENTIA - Sistema de gestión de cuentas\n3. 🌾 AgroMercado - Plataforma para agricultores\n4. 🌐 GUIOSPRO-FLOSS - Plataforma Open Source\n\nTodos disponibles en GitHub. ¿Te gustaría saber más sobre alguno?';
    }

    // Respuestas sobre habilidades
    if (lowerMessage.includes('habilidad') || lowerMessage.includes('tecnología') || lowerMessage.includes('stack')) {
      return 'Jostin domina:\n\n• Frontend: HTML5, CSS3, JavaScript, React, Tailwind CSS\n• Backend: Python, Django, Node.js\n• Bases de Datos: PostgreSQL, MongoDB, SQLite\n• Cloud: AWS, Cloud Computing\n• Hardware: Soporte Técnico, Redes\n\n¡Un stack completo para desarrollo Full Stack!';
    }

    // Respuestas sobre contacto
    if (lowerMessage.includes('contacto') || lowerMessage.includes('email') || lowerMessage.includes('correo')) {
      return '📧 Puedes contactar a Jostin por:\n\n• Email: jostinmora740@gmail.com\n• Celular: 0980601334\n• WhatsApp: +593 98 060 1334\n• GitHub: github.com/Jostinchalan\n• Instagram: @fernan_jostin';
    }

    // Respuestas sobre citas
    if (lowerMessage.includes('cita') || lowerMessage.includes('reunión') || lowerMessage.includes('agendar')) {
      return '📅 ¡Genial! Para agendar una cita, puedes:\n\n1. Escribir directamente a WhatsApp: +593 98 060 1334\n2. Llamar al: 0980601334\n3. Enviar un email con tu disponibilidad\n\n¿Prefieres que te redirija a WhatsApp para agendar ahora? 😊';
    }

    // Respuestas sobre WhatsApp
    if (lowerMessage.includes('whatsapp') || lowerMessage.includes('wa')) {
      return '📱 ¡Perfecto! Puedes chatear directamente con Jostin en WhatsApp:\n\nhttps://wa.me/593980601334\n\n¡Te responderá lo antes posible!';
    }

    // Respuestas sobre educación
    if (lowerMessage.includes('educación') || lowerMessage.includes('universidad') || lowerMessage.includes('estudios')) {
      return '🎓 Jostin está cursando el Octavo Semestre de Ingeniería en Software en la Universidad Estatal de Milagro (UNEMI).\n\nFormación previa:\n• Bachiller Técnico en Informática - Unidad Educativa Naranjito\n\nCertificaciones:\n• Cloud Computing - UNEMI\n• AWS Academy Cloud Foundations';
    }

    // Respuestas sobre experiencia
    if (lowerMessage.includes('experiencia') || lowerMessage.includes('trabajo')) {
      return '💼 Experiencia de Jostin:\n\n• Técnico de Soporte y Mantenimiento (2022-2025)\n  - Instalación y configuración de sistemas\n  - Mantenimiento preventivo y correctivo\n  - Soporte técnico a usuarios\n\n• Pasante Administrativo - UNEMI\n  - Operaciones Tecnológicas\n  - Inventario de equipos\n  - Configuración de hardware y software';
    }

    // Respuestas sobre disponibilidad
    if (lowerMessage.includes('disponible') || lowerMessage.includes('freelance')) {
      return '💼 ¡Sí! Jostin está disponible para:\n\n• Proyectos freelance\n• Colaboraciones\n• Oportunidades de trabajo\n• Prácticas profesionales\n\n¿Te gustaría contactarlo para discutir una oportunidad?';
    }

    // Saludos
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('hey')) {
      return '¡Hola! 👋 ¿En qué puedo ayudarte? Puedo contarte sobre los proyectos de Jostin, su experiencia laboral, o ayudarte a agendar una cita. ¿Qué te interesa?';
    }

    // Despedidas
    if (lowerMessage.includes('gracias') || lowerMessage.includes('chao') || lowerMessage.includes('adiós')) {
      return '¡De nada! 😊 Ha sido un placer ayudarte. Si necesitas algo más, aquí estaré. ¡Que tengas un excelente día!';
    }

    // Respuesta por defecto
    return 'Interesante pregunta. Puedo ayudarte con información sobre:\n\n• 💼 Proyectos de Jostin\n• 🛠️ Habilidades técnicas\n• 💻 Experiencia laboral\n• 📧 Información de contacto\n• 📅 Agendar una cita\n• 🎓 Educación y certificaciones\n\n¿Sobre qué te gustaría saber más?';
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante del chatbot */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Abrir chat"
        >
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            ¡Chatea conmigo!
          </span>
        </button>
      )}

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700">
          {/* Header del chatbot */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="text-blue-600" size={24} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-white">Asistente Virtual</h3>
                <p className="text-xs text-blue-100">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
              aria-label="Cerrar chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Indicador de escritura */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input de mensaje */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-slate-900 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                aria-label="Enviar mensaje"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}