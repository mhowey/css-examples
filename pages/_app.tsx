import "@root/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentRoute = router.route;
  return (
    <>
      <Header title={currentRoute.replace("/", "") + " example"} />
      <div className="mainWrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}
