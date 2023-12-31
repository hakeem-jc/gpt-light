import { FC } from 'react';
import styles from './ChatBox.module.scss';
import user from '@/assets/user.png';
import avatar from '@/assets/bot.png';
import { ChatType } from '@/interfaces/interfaces';
import Image from 'next/image';

interface ChatBoxProps {
    role?: string,
    content?: string,
    is_empty?: boolean
}

const ChatBox:FC<ChatBoxProps> = (props) => {
    const roleClassName = props.role === ChatType.BOT ? styles['chatbox-bot'] : '';

    // Split the content by line breaks and render each line as a separate paragraph
    const contentLines = !props.content ? [""] : props.content?.split('\n') ;
  
    return (
        <div className={`${styles.chatbox} ${roleClassName}`}>
        {props.is_empty ? 
            <div className={styles['text-container']}>
                <Image 
                    src={avatar}
                    alt="Bot Icon"
                    className={styles['image']}
                />
                <div className={styles.cursor}></div>
            </div>
            :
            <div className={styles['text-container']}>
                <Image 
                    src={props.role === ChatType.BOT ? avatar : user}
                    alt={props.role === ChatType.BOT ? "Bot Icon" : "User Icon"}
                    className={styles['image']}
                />
                <div className={styles['text-wrap']}>
                
                {contentLines.map((line, index) => (
                        <p key={index} className={styles['text']}>
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        }

      </div>);
}

export default ChatBox;
