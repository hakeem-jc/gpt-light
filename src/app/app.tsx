'use client'
import styles from './page.module.css';
import ChatBox from '@/components/ChatBox/ChatBox';
import Form from '@/components/Form/Form';
import { useAppSelector } from '@/redux/hooks';

export const App = () => {
  const chat = useAppSelector(state => state.chat);

  return (
    <main className={styles.app}>
        <header>
            <h1 className={styles.app__title}>ChatGPT Light</h1>
            <p>A minimalist ChatGPT Clone</p>
        </header>

        <section className={styles.messages}>
            {chat.length === 0 && <p>Send a message to get started</p>}
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
