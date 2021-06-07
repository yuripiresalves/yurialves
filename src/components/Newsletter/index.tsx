import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import styles from './styles.module.scss';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/subscribe?email=${email}`);

    if (res.ok) {
      setIsLoading(false);
      return toast.success(
        'Um e-mail de confirmação foi enviado para a sua caixa de entrada.'
      );
    }
  };

  function handleChange({ target }) {
    setEmail(target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) {
      return toast.error('Por favor, digite seu e-mail.');
    }
    setIsLoading(true);
    subscribe({ email });
    setEmail('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Digite seu e-mail para receber atualizações {':)'}
          </label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={handleChange}
          />
          {isLoading ? (
            <button type="submit" disabled>
              Cadastrando...
            </button>
          ) : (
            <button type="submit">Cadastrar</button>
          )}
        </form>
      </div>
    </div>
  );
}
