import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This is the webpage I made using Next.js which is built on the React framework
        </p>

        
        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Install</h3>
            <p>I first downloaded Node.js so that I can download  Next.js using <code>create-next-app</code> in terminal. After my Next.js app was created, I started the dev server using <code>npm run dev</code>. The instructions were very easy to follow.</p>
          </a>

          <a  className={styles.card}>
            <h3>Challenges</h3>
            <p>Some challenges were to learn how Next.js works and going through the different premade files. There were configeration files and a bunch of different ones that I'm not familiar with since we never used it in this class. It was a bit overwhelming compared to the usual webages I make for this class.</p>
          </a>

          <a
           
            className={styles.card}
          >
            <h3>Editing the page;</h3>
            <p>After installation, I was able to open all the files in VSCode and edit the pages such as this one! It is a JavaScript file which I am familiar with since we worked with JavaScript in previous labs. It was really easy editing this startup page since it was premade and had styles and formatting already!</p>
          </a>

  
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
