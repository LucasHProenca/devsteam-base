import styles from './saleCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

const SaleCard = () => {
    return(
        <div className={styles.salecard}>
            <Image src='/products/league-of-legends.jpg' width = {250} height = {300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R$99,90</p>
                        <h4 className={styles.discountprice}>R$89,90</h4>
                    </div>
                </div>
                <Button fullwidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

export default SaleCard