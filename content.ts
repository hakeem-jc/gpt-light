interface DictionaryEntry {
  welcome_text: string
}

// export const dictionary: Record<string, DictionaryEntry> = {
//   en: {
//     welcome_text: 'Welcome to GPT Light'
//     homeContent: "Welcome to my home.",
//     aboutHeader: "About Me",
//     aboutContent: "Here is some information about me. English is my primary language."
//   },
//   es: {
//     homeHeader: "Casa",
//     homeContent: "Beinvenidos a mi casa.",
//     aboutHeader: "Sobre Yo",
//     aboutContent: "Aqui tenemos un poco informacion sobre yo. Hablo espanol tambien."
//   }
// }

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    welcome_text: 'Welcome to GPT Light'
  },
  es: {
    welcome_text: 'Bienvenido a GPT Light'
  }
}