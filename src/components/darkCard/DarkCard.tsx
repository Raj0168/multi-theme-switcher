import styles from "./DarkCard.module.css";

interface Props {
  title: string;
  price: number;
  image: string;
  onClick: () => void;
}

export default function DarkCard({ title, price, image, onClick }: Props) {
  return (
    <div className={styles.darkCard} onClick={onClick}>
      <img loading="lazy" src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}
