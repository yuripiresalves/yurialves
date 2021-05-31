import Head from 'next/head';
import { About } from '../components/About';

import { Hero } from '../components/Hero';
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
    </>
  );
}
