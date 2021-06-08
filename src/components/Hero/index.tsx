import { useEffect } from 'react';
import Typed from 'typed.js';

import styles from './styles.module.scss';

export function Hero() {
  // const options = {
  //   strings: ['Desenvolvedor Web Front-end, ReactJS e Next.js.'],
  //   typeSpeed: 60,
  // };

  useEffect(() => {
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 60,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img src="/assets/logo.svg" alt="Logo" className={styles.logo} />
          <div className={styles.typed}>
            <div id="typed-strings">
              <span>Desenvolvedor Web Front-end, ReactJS e Next.js.</span>
            </div>
            <span id="typed"></span>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/yuripiresalves" target="_blank">
              <img src="/assets/github.svg" alt="Github" />
            </a>
            <a href="https://linkedin.com/in/yuripiresalves" target="_blank">
              <img src="/assets/linkedin.svg" alt="Linkedin" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCzvpvlR2WpJFW3r33c9E5rQ"
              target="_blank"
            >
              <img src="/assets/youtube.svg" alt="YouTube" />
            </a>
            <a href="https://instagram.com/yuripa07" target="_blank">
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className={styles.image} />
      </div>
    </div>
  );
}
