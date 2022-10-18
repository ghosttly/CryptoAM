import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Sidebar } from "components";
import { MainLayout } from "layouts";
import { CryptoProvider } from "../containers/CryptoContainer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CryptoProvider>
      <Navbar />
      <Sidebar />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </CryptoProvider>
  );
}

export default MyApp;
