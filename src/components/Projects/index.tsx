import { Card } from '../Card';
import styles from './styles.module.scss';

export function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Últimos projetos</h1>

        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
