import { Footer } from '../../components/Footer';
import styles from './styles.module.scss';

export default function Projeto() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
        <h1 className={styles.title}>Foodfy</h1>

        <section className={styles.body}>
          <p>
            Esse projeto foi o desafio final do bootcamp Launchbase da
            <a href=""> Rocketseat</a>, no qual eu participei de 2020 até 2021.
            Ele foi desenvolvido com as seguintes tecnologias:
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Nunjucks</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
          <p>
            O Foodfy foi o primeiro site completo que eu desenvolvi, com ele
            pratiquei muitos conceitos da programação web e bla bla bla...
          </p>
          Para acessar o código no github clique no botão abaixo: ↓
        </section>

        <button className={styles.button}>Acessar</button>
      </div>
      <Footer />
    </div>
  );
}
