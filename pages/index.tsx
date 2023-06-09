import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@root/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>css-examples-app</p>
          <p>Various CSS Layout Techniques</p>
        </div>

        <div className={styles.center}>
          <h1>css-examples-app</h1>
        </div>

        <div className={styles.grid}>
          <Link href="grid" className={styles.card}>
            <h2 className={inter.className}>
              Grid <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="flexbox" className={styles.card}>
            <h2 className={inter.className}>
              Flexbox <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="svg" className={styles.card}>
            <h2 className={inter.className}>
              SVG <span>-&gt;</span>
            </h2>
          </Link>

          <Link href="images" className={styles.card}>
            <h2 className={inter.className}>
              Images <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </main>
    </>
  );
}
