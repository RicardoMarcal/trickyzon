import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const ProductsComponent = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 1rem auto;

    h2{
        margin: 0rem auto 1.5rem auto;
        padding-bottom: 1rem;
        text-align: center;
        color: var(--color4);
        border-bottom: 1px solid var(--color3);
    }

    > section{
        display: grid;
        grid-template-columns: repeat(auto-fill, 15rem);
        justify-content: space-evenly;
        
        div{
            width: 15rem;
            margin-bottom: 2rem;
            background-color: var(--color1);
            padding: 0.5rem;
            border-radius: 0.3rem;
            box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
            cursor: pointer;

            p{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: 300ms;
            }
        }

        &:hover > .image{
            transform: translate(1.1);
        }
    }

`

function Products({ category, products }: any) {
  return (
    <ProductsComponent>
        <h2>Selected Category: {category || 'all'}</h2>
        <section>
            {products?.map((product: any) => (
                <div key={product.id}>
                    <Image src={product.image} alt={product.title} width={1024} height={1024} className="image"></Image>
                    <p>{product.title}</p>
                    <h3>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
                </div>
            ))}
        </section>
    </ProductsComponent>
  )
}

export default Products