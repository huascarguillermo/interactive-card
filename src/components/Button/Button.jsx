import style from "./button.module.css"

function Button({children}) {
  return <button className={style.button}>{children}</button>
}

export default Button
