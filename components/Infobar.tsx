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
    border-left: 5px solid var(--color4);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);

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

    section:nth-child(1){
        border-right: 1px solid #ddd;
        margin-right: 1rem;
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

        section:nth-child(1){
            border-right: 0;
            margin-right: 0;
        }
    }
`

function Infobar() {

    return (
        <InfobarComponent>
            <section>
                <h3>Fast and secure payment</h3>
            </section>
            <section>
                <Image src="/credit-card.svg" alt="credit card" height={48} width={48}></Image>
                <h3>Up to 12x insterest-free installments</h3>
            </section>
            <section>
                <Image src="/hand-coin.svg" alt="hand holding a coin" height={48} width={48}></Image>
                <h3>Paid in installments (bank slip)</h3>
            </section>
            <section>
                <Image src="/qr-phone.svg" alt="phone with a qr code" height={48} width={48}></Image>
                <h3>With pix</h3>
            </section>
            <Image src="/plus.svg" alt="plus" height={48} width={48}></Image>
        </InfobarComponent>
    )
}

export default Infobar