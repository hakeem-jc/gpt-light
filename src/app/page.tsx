import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className={styles.app}>
      <header>
        <h1 className={styles.app__title}>ChatGPT Light</h1>
        <p>A minimalist ChatGPT Clone</p>
      </header>

      <section className={styles.messages}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deserunt?</p>
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
