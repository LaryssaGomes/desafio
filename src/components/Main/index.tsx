import styles from "./styles.module.scss";
export default function Main() {
  return (
    <main className={styles.main}>
      <div>
        <p>Seja bem vindo e venha fazer parte do nosso ponto do saber</p>
        <p>
          Aqui voce encrotra salas de de papo bapo referente ao assunto que
          deseja aprender mais.📚 📖
        </p>
      </div>
      <div className={styles.img}>
        <img src="/images/person.svg" />
      </div>
    </main>
  );
}
