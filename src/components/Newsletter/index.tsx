import styles from './styles.module.scss';

export function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Digite seu e-mail para receber atualizações {':)'}</h2>
        <form action="">
          <input type="text" placeholder="exemplo@email.com" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
