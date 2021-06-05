import { useState } from 'react';

import { Card } from '../Card';
import styles from './styles.module.scss';

interface Project {
  uid: string;
  image: string;
  title: string;
}

interface ProjectPagination {
  nextPage: string;
  results: Project[];
}

interface ProjectProps {
  projectsPagination: ProjectPagination;
}

export function Projects({ projectsPagination }: ProjectProps) {
  const [projects, setProjects] = useState([...projectsPagination.results]);
  const [nextPage, setNextPage] = useState(projectsPagination.nextPage);

  async function loadMoreProjects() {
    const response = await fetch(nextPage);
    const json = await response.json();
    console.log(json);

    const loadedProjects = json.results.map((project) => {
      return {
        image: project.data.banner.url,
        title: project.data.title,
        uid: project.uid,
      };
    });

    setProjects([...projects, ...loadedProjects]);
    setNextPage(json.next_page);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Últimos projetos</h1>

        <div className={styles.cards}>
          {projects.map((project) => {
            return (
              <Card
                key={project.uid}
                uid={project.uid}
                image={project.image}
                title={project.title}
              />
            );
          })}
        </div>

        {nextPage && (
          <button
            type="button"
            className={styles.button}
            onClick={loadMoreProjects}
          >
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
}
