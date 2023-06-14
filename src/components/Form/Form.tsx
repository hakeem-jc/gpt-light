import { FC, FormEvent, useState } from 'react';
import styles from './Form.module.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setChat } from '@/redux/chatSlice';

const Form:FC  = () => {
  const [formData, setFormData] = useState({message: '',});
  const dispatch = useAppDispatch();
  const { chat } = useAppSelector(state => state);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let payload = { messages: [...chat,{role:"user", content:formData.message}] };
    dispatch(setChat({role:"user", content:formData.message}));
    
    // axios.post(`${process.env.ORIGIN}/api/generate`, payload)
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/generate`, payload)
    .then((res)=>{
        dispatch(setChat({role:"assistant", content:res.data.result}));
        }).catch((err)=>{
            console.error(err);
        });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chat_form}>
      <input
        type="text"
        id="message"
        name="message"
        className={styles.chat_input}
        placeholder='Send a message.'
        value={formData.message}
        onChange={handleChange}
        autoComplete='off'
      />

        <button type="submit" className={styles.form_button}>
            <FontAwesomeIcon icon={faPaperPlane} className={styles.form_icon}/>
        </button>
    </form>
  );
};

export default Form;
