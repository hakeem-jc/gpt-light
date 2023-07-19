'use client'
import { useRef, useEffect } from 'react';
import styles from './app.module.scss';
import ChatBox from '@/components/ChatBox/ChatBox';
import Form from '@/components/Form/Form';
import { useAppSelector } from '@/redux/hooks';
import { ChatType } from '@/interfaces/interfaces';
import { useTranslation } from '../i18n';
import LogRocket from 'logrocket';
LogRocket.init('uwhnan/gpt-light');

export const App = async (lng:any) => {
  const chat = useAppSelector(state => state.chat);
  const is_loading = useAppSelector(state => state.is_loading);
  const anchor = useRef<HTMLSpanElement>(null);
  const { t } = await useTranslation(lng)


  useEffect(() => { 
    if (anchor.current) {
      anchor.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  const WelcomeMessage = () => {
    return (
        <section className={styles.empty_chat_container}>
            <h2 className={styles.title}>Welcome to GPT Light</h2>
            <p>A partial open source clone of OpenAI&apos;s ChatGPT</p>
            <h3 className={styles.disclaimer}>Important: GPT Light is 100% unaffiliated with OpenAI.</h3>
            <p>Send a message to get started</p>
        </section>
    )
  }

  return (
    <main className={styles.app}>
        <section className={styles.messages}>
            {chat.length === 1 && <WelcomeMessage />}
            {chat.length > 1 && chat.map((message, i)=> {
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
