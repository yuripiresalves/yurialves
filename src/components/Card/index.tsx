import Link from 'next/link';
import styles from './styles.module.scss';

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="/assets/deposito.svg" alt="" />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Foodfy</h2>
        <Link href="/projetos/teste">
          <button className={styles.button} type="button">
            Acessar
          </button>
        </Link>
      </div>
    </div>
  );
}
