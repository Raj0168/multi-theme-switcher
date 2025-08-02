import styles from "./ProductListItem.module.css";

interface Props {
  id: number;
  title: string;
  price: number;
  image: string;
  onClick: () => void;
}

export default function ProductListItem({
  id,
  title,
  price,
  image,
  onClick,
}: Props) {
  return (
    <div key={id} className={styles.item} onClick={onClick}>
      <img loading="lazy" src={image} alt={title} className={styles.thumb} />
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
