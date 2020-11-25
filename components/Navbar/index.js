import styles from "./Navbar.module.css"
import NavButtons from "../NavButtons"
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className={styles.navbarContainer} id="INICIO">
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="https://i.postimg.cc/NFgP3B3h/logo.png"
            alt="Logo Malapata"
            width={917/5}
            height={745/5}
            quality={50}
            loading="lazy"
          />
        </div>
        <NavButtons />
      </div>
    </div>
  )
}