import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Infobar from '../components/Infobar'
import Products from '../components/Products'
import styles from '../styles/Home.module.css'

type Product = {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
}

interface Props {
  categories: string[],
  category: string,
  products: Product[]
}

const Home: NextPage<Props> = ({ categories, category, products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trickyzon</title>
        <meta name="description" content=":)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header categories={categories} />
      <Infobar />
      <Products products={products} category={category} />
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const category = context.query.category || null;

  const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) => res.json())

  let products = await fetch(`https://fakestoreapi.com/products/category/${category}`).then((res) => res.json())
  if(products.length === 0){
    products = await fetch('https://fakestoreapi.com/products').then((res) => res.json())
  }

  return {
    props: { categories, category, products }
  }
}

export default Home
