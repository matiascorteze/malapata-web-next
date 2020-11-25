import styles from "./ProductPage.module.css"
import Navbar from "../../components/Navbar"
import PictureContainer from "../../components/PictureContainer";
// import ScriptTag from 'react-script-tag';
import BarritaHor from "../../components/BarritaHor";
import Footer from "../../components/Footer";
import { useRouter } from 'next/router'
import Script from "react-inline-script"
import { useState, useEffect } from "react"
import {Helmet} from "react-helmet";


export default function ProductPage(props) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const router = useRouter()
  const location = router.asPath
  const id = (location.split("/")[2])

  const product = props.json.filter((product) => product.url === id)[0]
  console.log(product);

  const { name, price, desc, medidas, precios } = product

  return (
    <>
      <Navbar />
      <div className={styles.productTopSection}>
        <PictureContainer props={product} />
        <div className={styles.productInfoInd}>
          <h1 className={styles.productNameInd}>{name}</h1>
          <h3 className={styles.productPriceInd}>Desde ${price}</h3>
          <p className={styles.productDescInd}>
            {desc.map((desc, key) => {
              return (
                <span key={key}>{desc}</span>
              )
            })}</p>

          <div className={styles.priceList}>
            {precios && precios.map((precio, key) => {
              console.log(precio)
              const { medida, valor, src, datapref } = precio;
              return (
                <div className={styles.priceBlock} key={key}>
                  <h3 className={styles.priceBlockTitle}>-{medida}:   <span>${valor}</span></h3>
                  {!isLoading && (
                    <script 
                      className="Botón MP" 
                      type="text/javascript"
                      src={src}
                      data-preference-id={datapref}
                      data-button-label="Comprar" dangerouslySetInnerHTML={{__html: `Mercadopago`}}/>
                  )}


                </div>
              )
            })}

          </div>

        </div>
      </div>
      <BarritaHor />
      <div className={styles.productBottomSection}>
        <h1 className={styles.bottomSectionTitle}>¿Cómo tomo las medidas de mi mascota?</h1>
        <h2 className={styles.bottomSectionSubtitle}>Siempre tu mascota parada, nunca acostada.</h2>
        {medidas && medidas.map((medida, key) => {
          return (
            <div key={key}>
              <h3 className={styles.medidaTitle}>{medida.title}</h3>
              <p className={styles.medidaProc}>{medida.proc}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch("https://api.jsonbin.io/b/5fbe5b2f4f12502c21d863b9")
  const json = await data.json()

  return {
    props: {
      json
    }, // will be passed to the page component as props
  }
}

// <Helmet>
// <script
// type="text/javascript"
// src={src}
// data-preference-id={datapref}
// data-button-label="Comprar"/>
// </Helmet>