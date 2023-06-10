import { FC } from 'react';
import styles from './ChatBox.module.css';
import user from '@/assets/user.png';
import avatar from '@/assets/bot.png';
import { ChatType } from '@/interfaces/interfaces';
import Image from 'next/image';

interface ChatBoxProps {
    role: string,
    content: string
}

const ChatBox:FC<ChatBoxProps> = (props) => {
    const roleClassName = props.role === ChatType.BOT ? styles['chatbox--bot'] : '';
  
    return (
        <div className={`${styles.chatbox} ${roleClassName}`}>
        <div className={styles['chatbox__text-container']}>
            <Image 
                src={props.role === ChatType.BOT ? avatar : user}
                alt={props.role === ChatType.BOT ? "Bot Icon" : "User Icon"}
                className={styles['chatbox__image']}
            />
          <p className={styles['chatbox__text']}>{props.content}</p>
        </div>
      </div>);
}

export default ChatBox;
