import { FC, FormEvent, useState } from 'react';
import styles from './Form.module.scss';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setChat } from '@/redux/chatSlice';
import { setIsLoading } from '@/redux/LoadingSlice';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

const Form:FC  = () => {
  const [formData, setFormData] = useState({message: '',});
  const dispatch = useAppDispatch();
  const chat = useAppSelector(state => state.chat);
  const { enqueueSnackbar }= useSnackbar();
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let payload = { messages: [...chat,{role:"user", content:formData.message}] };
    dispatch(setChat({role:"user", content:formData.message}));
    setFormData({message: ''});

    dispatch(setIsLoading(true));
    
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/generate`, payload)
    .then((res)=>{
        dispatch(setIsLoading(false));
        dispatch(setChat({role:"assistant", content:res?.data?.result?.message?.content}));
        }).catch((err)=>{
        dispatch(setIsLoading(false));
            console.error(err);

            enqueueSnackbar(t('content.error'), {
              variant: 'error',
              preventDuplicate: true,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal:'center'
              }
            })
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
        placeholder={t('content.placeholder')}
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
