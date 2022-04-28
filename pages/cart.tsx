import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import Header from "../components/Header"

const CartItems = styled.section`
    background-color: red;
    h1{
        text-align: center;
    }
`

type Product = {
    productId: number,
    quantity: number
}

interface Props {
    categories: string[],
    cart: {
        id: number,
        userId: number,
        date: Date,
        products: Product[]
    }
}

const cart: NextPage<Props> = ({ categories, cart }) => {
  return (
    <div>
        <Head>
            <title>Trickyzon - Cart</title>
            <meta name="description" content=":)" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header categories={categories} />
        <CartItems>
            <h1>W.I.P</h1>
        </CartItems>
    </div>
  )
}

export default cart

export async function getServerSideProps(){
    const cart = await fetch('https://fakestoreapi.com/carts/2').then(res=>res.json())
    const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) => res.json())

    
    return {
        props: { categories, cart }
    }
}