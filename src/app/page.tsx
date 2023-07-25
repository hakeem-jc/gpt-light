'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { App } from './app';
import { SnackbarProvider } from 'notistack';

export const metadata = {
  title: 'GPT Light',
  description: 'Minimal AI Chat bot',
  author: 'Hakeem Clarke',
  keywords: 'ChatGPT Alternative, AI, Chatbot',
}

export default function Page() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <App/>
      </SnackbarProvider>
    </Provider>
  )
}
