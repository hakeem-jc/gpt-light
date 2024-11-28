import Providers from './providers';

export const metadata = {
  title: 'GPT Light - Fast & Minimal AI Chatbot Alternative',
  description: 'Discover GPT Light, a lightning-fast and lightweight AI chatbot alternative. Enjoy seamless conversations powered by AI with simplicity and efficiency.',
  author: 'Hakeem Clarke',
  keywords: 'AI chatbot, ChatGPT alternative, minimal chatbot, lightweight AI, conversational AI, GPT Light, fast chatbot',
  icons: {
    icon: '/favico.png', // Default icon
    shortcut: '/favicon.png', // Optional shortcut icon
    other: {
      rel: 'icon',
      url: '/favicon.ico',
    },
  },
};

export default function Page() {
  return (
   <Providers />
  )
}
