import styles from "./Card.module.css";

interface CardProps {
  title: string;
  price: number;
  image: string;
  onClick?: () => void;
}

export default function Card({ title, price, image, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={title} className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>$ {price.toFixed(2)}</p>
      <button onClick={onClick} className={`${styles.button}`}>
        Buy
      </button>
    </div>
  );
}
