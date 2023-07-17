'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { App } from './app';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

import { useRef, useEffect } from 'react';
import styles from './app.module.scss';
import ChatBox from '@/components/ChatBox/ChatBox';
import Form from '@/components/Form/Form';
import { useAppSelector } from '@/redux/hooks';
import { ChatType } from '@/interfaces/interfaces';
import { dictionary } from '../../../content';

import LogRocket from 'logrocket';
LogRocket.init('uwhnan/gpt-light');


export default function Page({ params }: { params: { lang: string } }) {
  const chat = useAppSelector(state => state.chat);
  const is_loading = useAppSelector(state => state.is_loading);
  const anchor = useRef<HTMLSpanElement>(null);
  useEffect(() => { 
    if (anchor.current) {
      anchor.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  return (
      <SnackbarProvider>
      <main className={styles.app}>
        <section className={styles.messages}>
            {chat.length === 1 && <section className={styles.empty_chat_container}>
              <h2 className={styles.title}>{dictionary[params.lang]?.welcome_text}</h2>
              <p>A partial open source clone of OpenAI&apos;s ChatGPT</p>
              <h3 className={styles.disclaimer}>Important: GPT Light is 100% unaffiliated with OpenAI.</h3>
              <p>Send a message to get started</p>
            </section>
            }
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
      </SnackbarProvider>
  )
}
