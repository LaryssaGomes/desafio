import styles from "./styles.module.scss";
export default function Section(props) {
  return (
    <section className={styles.section}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>{props.children}</div>
    </section>
  );
}
