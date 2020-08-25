import "../styles/index.css";
import { FetchProvider } from "./../context/FetchContext";

function MyApp({ Component, pageProps }) {
  return (
    <FetchProvider>
      <Component {...pageProps} />
    </FetchProvider>
  );
}

export default MyApp;
