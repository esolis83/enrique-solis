
import Hero from '../components/Hero/Hero';
import About from "../components/About/About";
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <About />
      <Projects />
      <Skills />
    </Layout>
  );
};

export default Home;
