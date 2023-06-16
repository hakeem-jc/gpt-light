'use client'
import { useRef, useEffect } from 'react';
import styles from './page.module.css';
import ChatBox from '@/components/ChatBox/ChatBox';
import Form from '@/components/Form/Form';
import { useAppSelector } from '@/redux/hooks';
import { ChatType } from '@/interfaces/interfaces';

export const App = () => {
  const chat = useAppSelector(state => state.chat);
  const is_loading = useAppSelector(state => state.is_loading);
  const anchor = useRef<HTMLSpanElement>(null);
  useEffect(() => { 
    if (anchor.current) {
      anchor.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  const WelcomeMessage = () => {
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
        <section className={styles.messages}>
            {chat.length === 0 && <WelcomeMessage />}
            {chat.length !== 0 && chat.map((message, i)=> {
                return message.role  !== "system" && 
                <ChatBox 
                    key={`message:${i}`} 
                    role={message.role} 
                    content={message.content}
                    is_empty={false}
                />
            })}
            {is_loading && <ChatBox role={ChatType.BOT} is_empty={true}/>}
            <span ref={anchor}></span>
        </section>

        <footer className={styles.chat_form_container}>
            <Form />
            <p className={styles.credits}>© 2023 Hakeem Clarke</p>
        </footer>
    </main>
  )
}
