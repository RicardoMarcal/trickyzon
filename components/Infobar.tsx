import Image from "next/image"
import styles from "../styles/Infobar.module.css"

function Infobar() {

    return (
        <div className={styles.container}>
            <section>
                <h3>Pagamento rápido e seguro</h3>
            </section>
            <section>
                <Image src="/credit-card.svg" alt="credit card" height={48} width={48}></Image>
                <h3>Até 12 vezes sem juros</h3>
            </section>
            <section>
                <Image src="/hand-coin.svg" alt="hand holding a coin" height={48} width={48}></Image>
                <h3>Parcelado no boleto</h3>
            </section>
            <section>
                <Image src="/qr-phone.svg" alt="phone with a qr code" height={48} width={48}></Image>
                <h3>Via Pix</h3>
            </section>
            <Image src="/plus.svg" alt="plus" height={48} width={48}></Image>
        </div>
    )
}

export default Infobar