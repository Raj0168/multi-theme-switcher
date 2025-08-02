import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt
          ea suscipit iusto dicta repellendus ab? Reiciendis doloribus quasi
          ipsum temporibus aliquam rem, quos quas delectus laudantium. Corrupti
          distinctio maiores, nam consequatur at, voluptates, commodi quae
          perspiciatis provident debitis quas placeat quo nostrum fugiat enim
          sit ut? Cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint
          perspiciatis explicabo recusandae ad suscipit. Fugiat voluptatum
          veritatis voluptate ratione doloremque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          dolores perferendis perspiciatis delectus quo consectetur ratione
          quasi obcaecati neque voluptate. Neque debitis, voluptates
          voluptatibus illum, quae consequatur consequuntur amet cupiditate quam
          est iure culpa repellendus autem laudantium quaerat! Nostrum animi
          harum quisquam sit officia, inventore dolores ducimus quia cupiditate
          beatae iusto debitis dignissimos recusandae vero at placeat eos
          perferendis ipsa accusantium? Harum culpa odit cumque voluptates
          pariatur. Sapiente, expedita ab vel cupiditate eum a molestias
          necessitatibus eos quis architecto nesciunt numquam? Debitis
          voluptatem consectetur inventore dolor dolorem enim. Iste?
        </p>
      </div>
    </section>
  );
}
