import Link from 'next/link'
import styles from "./NavButtons.module.css"

export default function NavButtons() {
  return (
    <ul className={styles.buttonsSections}>
      <Link href="/">
        <a className={styles.sectionInd}>INICIO</a>
      </Link>
      {/* <div className="vertical-line"></div>
      <Link to="/" className="sectionInd">PRODUCTOS</Link> */}
      <div className={styles.verticalLine}></div>
      <Link href="/SobreNosotros">
        <a className={styles.sectionInd}>SOBRE NOSOTROS</a>
      </Link>
    </ul>
  )
}