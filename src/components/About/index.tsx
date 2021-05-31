import styles from './styles.module.scss';

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Sobre mim</h1>
        <p>
          Me chamo Yuri Alves, tenho 19 anos e estou fazendo gradução no curso
          de Bacharel em Informática pela Universidade Estadual de Maringá
          (UEM). Comecei a ter interesse pela área de programação web no final
          de 2019 e comecei meus estudos em 2020, passando pelo Launchbase e
          Ignite, ambos bootcamps da Rocketseat.
        </p>
      </div>
    </div>
  );
}
