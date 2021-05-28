import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss={true}>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
