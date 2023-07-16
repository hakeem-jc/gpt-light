"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { App } from "./app";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { dictionary } from "../../../content";

export default function Page({ params }: { params: { lang: string } }) {
 
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Provider>
  );
}
