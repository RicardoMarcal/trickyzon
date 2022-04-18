import Image from "next/image"
import styled from 'styled-components'

const InfobarComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 1100px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.2rem;
    border-left: 5px solid var(--color4);;

    section{
        display: flex;
        align-items: center;
        width: 25%;
        height: 3.25rem;

        h3{
            font-weight: 350;
            margin-left: 0.7rem;
        }
    }

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        border-left: 0;
        border-top: 5px solid var(--color4);
        justify-content: center;
        
        section{
            width: 100%;
            padding: 0.5rem 0;
        }
    }
`

function Infobar() {

    return (
        <InfobarComponent>
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
        </InfobarComponent>
    )
}

export default Infobar