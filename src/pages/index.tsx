import Head from 'next/head';

import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/Newsletter';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuri Alves</title>
      </Head>
      <Hero />
      <About />
      <Projects />
      <Newsletter />
      <Footer />
    </>
  );
}
