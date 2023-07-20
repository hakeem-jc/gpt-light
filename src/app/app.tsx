'use client'
import { useRef, useEffect } from 'react';
import styles from './app.module.scss';
import ChatBox from '@/components/ChatBox/ChatBox';
import Form from '@/components/Form/Form';
import { useAppSelector } from '@/redux/hooks';
import { ChatType } from '@/interfaces/interfaces';
import LogRocket from 'logrocket';
LogRocket.init('uwhnan/gpt-light');

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
        <>
          <ChatBox 
                role={ChatType.BOT} 
                content={'Hey. Ask me anything. Here\'s a good example of a message:'}
                is_empty={false}
          />
          <ChatBox 
                role={ChatType.BOT} 
                content={'What are your thoughts on the impact of technology on society and its potential implications for the future?'}
                is_empty={false}
          />
          <ChatBox 
                role={ChatType.BOT} 
                content={`Send a message to get started`}
                is_empty={false}
          />
        </>
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
