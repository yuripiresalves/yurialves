import styles from './styles.module.scss';

export function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img src="/assets/logo.svg" alt="Logo" />
          <span>Desenvolvedor Web Front-end, ReactJS e Next.js.</span>
          <div className={styles.social}>
            <img src="/assets/github.svg" alt="Github" />
            <img src="/assets/linkedin.svg" alt="Linkedin" />
            <img src="/assets/youtube.svg" alt="YouTube" />
            <img src="/assets/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div className={styles.image} />
      </div>
    </div>
  );
}
