import  styles from './InputContainer.module.css'

export default function InputContainer({label,children}) {
    return (
        <div className={styles.container} >
             <label className={styles.label}>{label}</label>
             <div className={styles.content}>{children}</div>
        </div>
    )
}