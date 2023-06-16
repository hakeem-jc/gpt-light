'use client'
import styles from './page.module.css';
import ChatBox from '@/components/ChatBox/ChatBox';
import Form from '@/components/Form/Form';
import { useAppSelector } from '@/redux/hooks';

export const App = () => {
  const chat = useAppSelector(state => state.chat);

  const EmptyChat = () => {
    return (
        <section className={styles.empty_chat_container}>
            <h2 className={styles.title}>Welcome to MiniGPT</h2>
            <p>A partial open source clone of OpenAI's ChatGPT</p>
            <h3 className={styles.disclaimer}>Important: MiniGPT Light is 100% unaffiliated with OpenAI.</h3>
            <p>Send a message to get started</p>
        </section>
    )
  }

  return (
    <main className={styles.app}>
        {/* <header>
            <h1 className={styles.title}>MiniGPT</h1>
        </header> */}

        <section className={styles.messages}>
            {chat.length === 0 && <EmptyChat />}
            {chat.length !== 0 && chat.map((message, i)=> {
                return message.role  !== "system" && <ChatBox key={`message:${i}`} role={message.role} content={message.content}/>
            })}
        </section>

        <footer className={styles.chat_form_container}>
            <Form />
            <p className={styles.credits}>© 2023 Hakeem Clarke</p>
        </footer>
    </main>
  )
}
