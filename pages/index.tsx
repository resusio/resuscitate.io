import Head from 'next/head'

import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resuscitate.io</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="favicons/browserconfig.xml" />
        <meta name="theme-color" content="#D8DEE9" />
      </Head>

      <main>
        <div className={styles.flexContainer}>
          <div className={styles.flexContent}>
            <h1 className={styles.title}>
              <img src="logo.svg" className={styles.titleDropLetter} />
              esuscitate.io
            </h1>
            <img className={styles.ecgDiv} src="ecg-div.svg" />
            <h2 className={styles.subtitle}>
              Medical simulation, anywhere
            </h2>
          </div>
        </div>
      </main>
    </div>
  )
}
