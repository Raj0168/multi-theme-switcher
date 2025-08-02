import Card from "../../components/card/Card";
import Spinner from "../../components/utils/Spinner";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import styles from "./Home.module.css";
import listStyles from "./HomeList.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const { currentTheme } = useSelector((s: RootState) => s.theme);
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const isColorful = currentTheme === "theme3";

  if (isLoading) return <Spinner />;
  if (isError || !products)
    return <div className="container">Error loading products</div>;

  const listItem = (p: Product) => (
    <div key={p.id} className={listStyles.item}>
      <img src={p.image} alt={p.title} className={listStyles.thumb} />
      <div className={listStyles.details}>
        <h2>{p.title}</h2>
        <p>${p.price.toFixed(2)}</p>
      </div>
    </div>
  );

  return (
    <section className="container">
      <h1 className={styles.title}>Featured Products</h1>

      {isColorful ? (
        <div className={styles.grid}>
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              onClick={() => alert(`Buying ${p.title}`)}
            />
          ))}
        </div>
      ) : (
        <div className={listStyles.list}>
          {products.map((p) => listItem(p))}
        </div>
      )}
    </section>
  );
}
