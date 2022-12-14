import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link";

export default function Index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">News page!</a>
                </h1>

                <p className={styles.description}>
                    Get started by checking latest
                    <code className={styles.code}>issues & hints</code>
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Link href="/news/1">
                            <h2>News #1 &rarr;</h2>
                        </Link>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </div>

                    <div className={styles.card}>
                        <Link href="/news/2">
                            <h2>News #2 &rarr;</h2>
                        </Link>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </div>

                    <div
                        className={styles.card}
                    >
                        <Link href="/news/3">
                            <h2>News #3 &rarr;</h2>
                        </Link>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </div>


                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}
