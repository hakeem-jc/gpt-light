import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
   resources: {
      en: {
        translation: {
          content: {
              instructions: `Hey. Ask me anything. Here\'s a good example of a message:\n 
                            What are your thoughts on the impact of technology on society and its potential implications for the future?\n 
                            Send a message to get started
                            `
          }
        }
      },
      es: {
        translation: {
          content: {
              instructions: `Hola. Pregúntame lo que sea. Aquí hay un buen ejemplo de un mensaje:\n
                            ¿Qué piensa sobre el impacto de la tecnología en la sociedad y sus posibles implicaciones para el futuro?\n
                            Envía un mensaje para empezar`
          }
        }
      }
    }
  });

export default i18n;