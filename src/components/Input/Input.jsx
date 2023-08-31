import { useId } from 'react'
import style from './input.module.css'

function Input({label, placeholder, type}) {
    const id = useId()
    const reference = `${id}-reference`

    return (
        <div className={style.wrapper}>
            <label className={style.label} htmlFor={reference}>{label}</label>
            <input className={style.input} type={type} id={reference} placeholder={placeholder}/>
        </div>
    )
}

export default Input
