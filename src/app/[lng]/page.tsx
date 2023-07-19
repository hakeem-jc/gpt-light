'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { App } from './app';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

// @ts-ignore
export default function Page({ params: { lng } }) {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <App lang={lng}/>
      </SnackbarProvider>
    </Provider>
  )
}
