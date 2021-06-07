import Head from 'next/head';

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/Newsletter';
import { Projects } from '../components/Projects';

interface Project {
  uid: string;
  image: string;
  title: string;
}

interface ProjectPagination {
  nextPage: string;
  results: Project[];
}

interface HomeProps {
  projectPagination: ProjectPagination;
}

export default function Home({ projectPagination }: HomeProps) {
  return (
    <>
      <Head>
        <title>Yuri Alves</title>
        <meta
          name="description"
          content="Yuri Alves - Desenvolvedor Web Front-end, ReactJS e Next.js."
        />
      </Head>
      <Hero />
      <About />
      <Projects projectsPagination={projectPagination} />
      <Newsletter />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      fetch: ['project.title', 'project.banner'],
      pageSize: 3,
    }
  );

  const projects = response.results.map((project) => {
    return {
      uid: project.uid,
      image: project.data.banner.url,
      title: project.data.title,
    };
  });

  const projectPagination = {
    nextPage: response.next_page,
    results: projects,
  };

  return {
    props: { projectPagination },
    revalidate: 1,
  };
};
