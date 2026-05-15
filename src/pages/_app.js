import Theme from '../styles/theme';
import Head from 'next/head';
import Avatar from '../components/Avatar/Avatar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <title>Enrique Solis - Portfolio</title>
          <meta
            key="og:title"
            name="og:title"
            content="Enrique Solis - Portfolio"
          />
          <meta
            name="description"
            content="As a front-end engineer, I have extensive experience creating engaging websites. I specialize in React and Vue. I am passionate about creating beautiful and user-friendly websites. Let's work together to bring your vision to life!"
            key="desc"
          />
          <meta
            key="og:url"
            name="og:url"
            content="https://enriquesolis.me/"
          />
          <meta
            key="og:type"
            name="og:type"
            content="website"
          />
        </Head>
        <Component { ...pageProps } />
        <Avatar />
      </Theme>
    </>
  );
}
