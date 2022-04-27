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

const Home = ({ categories, category, products }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trickyzon</title>
        <meta name="description" content=":)" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header categories={categories} />
      <Infobar />
      <Products products={products} category={category} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const category = context.query.category || null;

  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json()

  let products = await fetch(`https://fakestoreapi.com/products/category/${category}`).then((res) => res.json())
  if(products.length === 0){
    products = await fetch('https://fakestoreapi.com/products').then((res) => res.json())
  }

  return {
    props: { categories, category, products }
  }
}

export default Home
