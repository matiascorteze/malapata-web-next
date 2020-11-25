import Link from 'next/link'
import styles from "./ProductList.module.css"
import products from "../../data/products.json"
import Product from "../Product"

export default function ProductList() {

  const productList = products;

  return (
    <section className={styles.productListContainer} id="productList">
      <h1 className={styles.productListHeader}>Nuestros productos</h1>
      <div className={styles.productList}>
        {productList && productList.map((product, key) => {
          return (
            <Link key={key} href={`/ProductPage/${product.url}`} className={styles.productLink}>
              <a>
                <Product props={product} />
              </a>
            </Link>
          )
        })}
      </div>
    </section>

  )
}

{/* <Link key={key} href={`/ProductPage/${product.url}`} className={styles.productLink}>
<Product props={product}/>
</Link> */}