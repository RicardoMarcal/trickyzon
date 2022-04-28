import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const HeaderComponent = styled.header`
    background-color: var(--color3);
    padding: 0.7rem;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);

    h1{
        cursor: pointer;
        grid-area: title;
        color: var(--color5)
    }

    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        
        section, section form{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        section form{
            grid-area: form;
            width: 100%;
            max-width: 30rem;
            padding: 0.4rem;
            background-color: var(--color1);
            gap: 0.2em;

            input{
                width: 100%;
                border: 0;
                outline: 0;
                height: 1rem;
                padding: 0 0.5rem;
            }

            button{
                background-color: transparent;
                border: 0;
                border-left: 1px solid #bbb;
                padding: 0 0.5rem;
                cursor: pointer;
                i{
                    font-size: 1.2rem;
                }

            }
        }

        section div{
            grid-area: buttons;
            width: 100%;
            max-width: 10.7rem;

            button{
                width: 5rem;
                padding: 0.3rem;
                border-radius: 1rem;
                border: 2px solid var(--color4);
                background-color: var(--color1);
                color: var(--color4);
                font-size: 0.95rem;
                cursor: pointer;
            }

            button:nth-child(2){
                background-color: var(--color4);
                color: var(--color1);
                margin-left: 0.7rem;
            }
        }

        nav{
            margin-top: 0.4rem;
        }
    }

    .wrapper div form button, .categories button{
        background-color: transparent;
        padding: 0.2rem;
        border: 0;
        border-left: 1px solid #ddd;
        font-size: 1rem;
        cursor: pointer;
    }

    .categories{
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;

        div{
            display: flex;
            gap: 1.1rem;
            color: var(--color4);
        }

        div p{
            cursor: pointer;
        }

        button{
            border: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        .wrapper section{
            display: grid;
            grid-template-areas:
                "title buttons"
                "form form";
            gap: 0.5rem;
        }
        .wrapper section form{
            max-width: 100%;
        }
    }
`

interface Props {
    categories: string[]
}

function Header({ categories }: Props) {
    const router = useRouter();

    return (
        <HeaderComponent>
            <div className="wrapper">
                <section>
                    <h1 onClick={() => router.push('/')}><i className="fas fa-mug-hot"></i> TRICKYZON</h1>
                    <form action="">
                        <input type="text" placeholder='Search products...' />
                        <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <div>
                        <Link passHref href="/"><button>Sign In</button></Link>
                        <Link passHref href="/"><button>Login</button></Link>
                    </div>
                </section>
                <nav className="categories">
                    <div>
                        <p onClick={() => router.push('/')}>all</p>
                        {categories.map((category: string, i: number) =>
                            <p
                              key={i}
                              onClick={() => router.push(`/?category=${category}`)}>
                                {category}
                            </p>
                        )}
                    </div>
                    <Link passHref href="/cart"><button><i className="fa-solid fa-cart-shopping"></i></button></Link>
                </nav>
            </div>
        </HeaderComponent>
    )
}

export default Header