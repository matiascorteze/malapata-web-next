import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.red}>
          <i className={`${styles.icon} fab fa-instagram`} />
          <a
            href="https://www.instagram.com/malapata3d/"
            target="_blank"
            rel="noopener noreferrer">@malapata3d</a>
        </div>
        <div className={styles.red}>
          <i className={`${styles.icon} far fa-envelope`} />
          <a
            href="mailto:malapata3d@gmail.com&subject=Consulta%20web">malapata3d@gmail.com</a>
        </div>
        <div className={styles.red}>
          <i className={`${styles.icon} fas fa-phone-alt`} />
          <a 
            href="https://wa.me/5491151743319"
            target="_blank"
            rel="noopener noreferrer">11-51743319</a>
        </div>
      </div>
      <a 
        href="https://github.com/matiascorteze"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.signature}>Made with <span className={styles.heart}>♥</span> by Matias Corteze</a>
    </section>
  )
}