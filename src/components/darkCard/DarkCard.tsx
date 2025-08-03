import type { CardProps } from "../../types";
import styles from "./DarkCard.module.css";

// dark theme (2) card
export default function DarkCard({ id, title, price, image, onClick }: CardProps) {
  return (
    <div className={styles.darkCard} onClick={onClick}>
      <img loading="lazy" src={image} alt={id + title} />
      <h3 className={styles.title}>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}
