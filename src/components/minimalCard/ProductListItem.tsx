import type { CardProps } from "../../types";
import styles from "./ProductListItem.module.css";

// minimal theme (1) card
export default function ProductListItem({
  id,
  title,
  price,
  image,
  onClick,
}: CardProps) {
  return (
    <div className={styles.item} onClick={onClick}>
      <img
        loading="lazy"
        src={image}
        alt={id + title}
        className={styles.thumb}
      />
      <div className={styles.details}>
        <h2>{id + ". " + title}</h2>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
