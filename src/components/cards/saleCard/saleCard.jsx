import styles from './saleCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

const SaleCard = ({image, discount, fullPrice, discountPrice, onAdd}) => {
    return(
        <div className={styles.salecard}>
            <Image src={`/products/${image}`} alt = {`Produto ${image}`} width = {250} height = {300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R${fullPrice}</p>
                        <h4 className={styles.discountprice}>R${discountPrice}</h4>
                    </div>
                </div>
                <Button fullwidth onClick = {onAdd}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    image: 'league-of-legends.jpg',
    discount: '90%',
    fullPrice: '199,90',
    discountPrice: '57,90'
}

export default SaleCard