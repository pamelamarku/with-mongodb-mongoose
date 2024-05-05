import "../css/style.css";
import "../css/form.css";
import Head from "next/head";
import Link from "next/link";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/new">Add Pet</Link>
        </div>

      <img
          id="title"
          src="https://static.vecteezy.com/system/resources/previews/009/551/676/non_2x/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg"
          alt="pet care logo"
        ></img>
      </div>
      <div className="wrapper grid">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
