import Link from 'next/link';
import styles from './styles.module.scss';

interface CardProps {
  uid: string;
  image: string;
  title: string;
}

export function Card({ uid, image, title }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <Link href={`/projetos/${uid}`}>
          <button className={styles.button} type="button">
            Acessar
          </button>
        </Link>
      </div>
    </div>
  );
}
