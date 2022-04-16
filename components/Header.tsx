import Link from 'next/link'
import styles from '../styles/Header.module.css'

function Header({ categories }: any) {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
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
                <nav className={styles.categories}>
                    <div>
                        {categories.map((category: any, i: number) =>
                            <Link key={i} passHref href="/"><p>{category}</p></Link>
                        )}
                    </div>
                    <Link passHref href="/"><button>🛒</button></Link>
                </nav>
            </div>
        </header>
    )
}

export default Header