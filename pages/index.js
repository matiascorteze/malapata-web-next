import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BarritaHor from "../components/BarritaHor"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList"
import Redes from "../components/Redes"



export default function Home() {
  return (
    <div>
      <Head>
        <title>Malapata3D</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/19ab91f7bd.js" crossorigin="anonymous"></script>
      </Head>

      <Navbar />
      <Hero />
      <BarritaHor />
      <ProductList />
      <BarritaHor />
      <Redes />
      <BarritaHor />
      <Footer />
    </div>
  )
}
