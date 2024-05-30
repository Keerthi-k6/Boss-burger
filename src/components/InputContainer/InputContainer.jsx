import  styles from './InputContainer.module.css'

export default function InputContainer({label,bgColor,children}) {
    return (
        <div className={styles.container} style={{backgroundColor:bgColor}}>
             <label className={styles.label}>{label}</label>
             <div className={styles.content}>{children}</div>
        </div>
    )
}