'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { App } from './app';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

export default function Page() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <App/>
      </SnackbarProvider>
    </Provider>
  )
}
