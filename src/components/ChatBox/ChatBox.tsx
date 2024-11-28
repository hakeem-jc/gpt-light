import { FC } from "react";
import styles from "./ChatBox.module.scss";
import user from "@/assets/user.png";
import avatar from "@/assets/bot.png";
import { ChatType } from "@/interfaces/interfaces";
import Image from "next/image";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ChatBoxProps {
  role?: string;
  content?: string;
  is_empty?: boolean;
}

const ChatBox: FC<ChatBoxProps> = (props) => {
  return (
    <pre className={styles.chatbox}>
      {props.is_empty ? (
        <div className={styles["text-container"]}>
          <Image src={avatar} alt="Bot Icon" className={styles["image"]} />
          <div className={styles.cursor}></div>
        </div>
      ) : (
        <div className={styles["text-container"]}>
          <Image
            src={props.role === ChatType.BOT ? avatar : user}
            alt={props.role === ChatType.BOT ? "Bot Icon" : "User Icon"}
            className={styles["image"]}
          />
          <div className={styles["text-wrap"]}>
            <p className={styles["text"]}>
                <Markdown remarkPlugins={[remarkGfm]}>{props.content}</Markdown>
            </p>
          </div>
        </div>
      )}
    </pre>
  );
};

export default ChatBox;
