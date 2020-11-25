import styles from "./Hero.module.css"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Malapata - Ortopedia 3D</h2>
        <h1 className={styles.title}>Férulas y carritos para mascotas!</h1>
      </div>
      <div className={styles.imgCont}>
        <Image
          className={styles.heroImg}
          src="https://i.postimg.cc/sXPNHv09/perrito-02.jpg"
          alt="Foto de perrito"
          width={746*4}
          height={417*4}
          quality={100}
        />
      </div>
    </section>
  )
}