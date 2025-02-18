import styles from './gameCard.module.css'
import Image from 'next/image'
import Button from '@/components/forms/button/button'

const GameCard = ({onAdd}) => {
    return(
        <div className={styles.gamecard}>
            <Image className={styles.image} src='/products/counter-strike.jpg' width={300} height = {145}/>
            <div className={styles.info}>
                <h3 className={styles.title}>Counter Strike: Global offensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$99,90</h2>
                    <Button onClick = {onAdd}>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

export default GameCard