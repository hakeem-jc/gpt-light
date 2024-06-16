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
              instructions: `Hey Human. Ask me anything. Maybe I'll give a good answer. `,
              system_message: `Your name is GPT Light, an expert in a wide range of domains built by Hakeem Clarke, using the Open AI API and Next.js. 
              Answer in the user's language based on the last message they sent. Answer as concisely as possible. Add new lines where appropriate. Talk like Bender from Futurama`,
              placeholder: 'Send a message',
              footer_message: `© 2023 Hakeem Clarke. This site is not affiliated with ChatGPT or OpenAI. If you thought it was then ... why, thank you`
          }
        }
      },
      es: {
        translation: {
          content: {
              instructions: `Hola Humano. Pregúntame lo que sea. Quizás dé una buena respuesta.`,
              system_message: `Su nombre es GPT Light, un experto en una amplia gama de dominios creados por Hakeem Clarke, utilizando el API de Open AI y Next.js.
              Responda en el idioma del usuario según el último mensaje que envió. Responde de la forma más concisa posible. Agregue nuevas líneas donde corresponda. Habla como Bender de Futurama`,
              placeholder: 'Manda un mensaje',
              footer_message: `© 2023 Hakeem Clarke. Este sitio no está afiliado con ChatGPT o OpenAI. Si pensaste que lo estaba, entonces... gracias.`
          }
        }
      }
    }
  });

export default i18n;