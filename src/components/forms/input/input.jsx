import styles from './input.module.css'

const Input = ({fullwidth, ...props}) => {
    return(
        <input className={`${styles.input} ${fullwidth && styles.fullwidth}`} {...props} />
    )
}

export default Input