import Card from "../../components/card/Card";
import Spinner from "../../components/utils/Spinner";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import ProductListItem from "../../components/productList/ProductListItem";

export default function Home() {
  const { currentTheme } = useSelector((s: RootState) => s.theme);
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const isColorful = currentTheme === "theme3";

  if (isLoading) return <Spinner />;
  if (isError || !products)
    return <div className="container">Error loading products</div>;

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
        <div className={styles.list}>
          {products.map((p) => (
            <ProductListItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}
