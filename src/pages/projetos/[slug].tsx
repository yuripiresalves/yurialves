import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../../components/Footer';
import styles from './styles.module.scss';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

interface Project {
  image: string;
  title: string;
  body: {
    text: string;
  }[];
  link: string;
}

interface ProjectProps {
  project: Project;
}

export default function Projeto({ project }: ProjectProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{project.title} - Yuri Alves</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={project.image} alt={project.title} />
        </div>
        <h1 className={styles.title}>{project.title}</h1>

        <section
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: RichText.asHtml(project.body) }}
        />
        <Link href={project.link}>
          <a target="_blank" className={styles.button}>
            Acessar
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project'),
  ]);

  const paths = projects.results.map((project) => {
    return {
      params: {
        slug: project.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('project', String(slug), {});

  console.log(response);

  return {
    props: {
      project: {
        image: response.data.banner.url,
        title: response.data.title,
        body: response.data.body,
        link: response.data.link.url,
      },
    },
  };
};
