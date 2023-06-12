import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ChatBox from '@/components/ChatBox/ChatBox';

export default function Home() {
  let chat = [
    {
        "role": "assistant",
        "content": "Hey, Meatbag"
    },
    {
        "role": "user",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];


  return (
    <main className={styles.app}>
      <header>
        <h1 className={styles.app__title}>ChatGPT Light</h1>
        <p>A minimalist ChatGPT Clone</p>
      </header>

      <section className={styles.messages}>
        {chat.map((message, i)=> {
            return message.role  !== "system" && <ChatBox key={`message:${i}`} role={message.role} content={message.content}/>
          })}
      </section>

      <section className={styles.chat_form_container}>
        <form className={styles.chat_form}>
            <input className={styles.chat_input} placeholder='Send a message.'/>
            <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
        </form>
      </section>
    </main>
  )
}
