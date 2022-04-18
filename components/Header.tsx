import Link from 'next/link'
import styled from 'styled-components'

const HeaderComponent = styled.header`
    background-color: var(--color3);
    padding: 0.5rem;

    .wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        
        div, div form{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        div form{
            width: 100%;
            max-width: 35rem;
            background-color: var(--color1);
            padding: 0.2rem;
            gap: 0.2em
        }

        div form input{
            width: 100%;
            border: 0;
            outline: 0;
            height: 1rem;
            padding: 0 0.5rem;
        }

        div div button{
            width: 5rem;
            padding: 0.3rem;
            border-radius: 1rem;
            border: 2px solid var(--color4);
            background-color: var(--color1);
            color: var(--color4);
            font-size: 0.95rem;
            cursor: pointer;
        }

        div div button:nth-child(2){
            background-color: var(--color4);
            color: var(--color1);
            margin-left: 0.7rem;
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
`

function Header({ categories }: any) {
    return (
        <HeaderComponent>
            <div className="wrapper">
                <div>
                    <h1>TRICKYZON</h1>
                    <form action="">
                        <input type="text" placeholder='Search products...' />
                        <button type='submit'>🔎</button>
                    </form>
                    <div>
                        <Link passHref href="/"><button>Sign In</button></Link>
                        <Link passHref href="/"><button>Login</button></Link>
                    </div>
                </div>
                <nav className="categories">
                    <div>
                        {categories.map((category: any, i: number) =>
                            <Link key={i} passHref href="/"><p>{category}</p></Link>
                        )}
                    </div>
                    <Link passHref href="/"><button>🛒</button></Link>
                </nav>
            </div>
        </HeaderComponent>
    )
}

export default Header