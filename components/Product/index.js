import styles from "./Product.module.css"

export default function Product({ props }) {

  const { name, price, main_img } = props;

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={main_img} alt={name} />
      <div className={styles.productInfoCont}>
        <h1 className={styles.productTitle}>{name}</h1>
        <div className={styles.priceContainer}>
          <span className={styles.desde}>desde</span>
          <h3 className={styles.productPrice}>${price}</h3>
        </div>
      </div>
      <button className={styles.productVerMasButton}>Ver más</button>
    </div>
  )
}