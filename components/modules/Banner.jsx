import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Florence</h2>
        <p>Food Delivery and Takeout</p>
        <span>
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href={"/menu"}>See All Product</Link>
      </div>

      <div className={styles.right}>
        <img src="/images/bannerTwo.png" alt="Benner image" />
      </div>
    </div>
  );
};

export default Banner;
