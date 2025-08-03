import type { CardProps } from "../../types";
import styles from "./Card.module.css";

// colorful theme (3) card
export default function Card({ id, title, price, image, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img loading="lazy" src={image} alt={id + title} className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>$ {price.toFixed(2)}</p>
      <button onClick={onClick} className={`${styles.button}`}>
        Buy
      </button>
    </div>
  );
}
