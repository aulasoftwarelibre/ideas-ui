import "../styles/index.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{ site: process.env.SITE }} session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
