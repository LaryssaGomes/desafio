import { ICard } from "../interfaces/ICard";
import styles from "./styles.module.scss";
interface CardProps {
  datas: ICard[];
}
export default function Card({ datas }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      {datas.map((data) => (
        <div className={styles.card} key={data.id}>
          <div className={styles.circle}>
            <h1>{data.number}</h1>
          </div>
          <div className={styles.content}>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
