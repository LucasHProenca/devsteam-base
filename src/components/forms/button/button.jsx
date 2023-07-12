import styles from './button.module.css'

const Button = ({children, fullwidth}) => {
    return(
        <button className={`${styles.button} ${fullwidth && styles.fullwidth}`}>{children}</button>
    )
}

export default Button