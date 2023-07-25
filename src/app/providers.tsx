'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { App } from './app';
import { SnackbarProvider } from 'notistack';

export default function Providers() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <App/>
      </SnackbarProvider>
    </Provider>
  )
}
