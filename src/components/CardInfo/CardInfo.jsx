import Button from "../Button/Button"
import Input from "../Input/Input"
import style from "./cardinfo.module.css"
import styleInput from '../Input/input.module.css'

function CardInfo() {
  return (
    <section>
      <h2 className="visually-hidden">Card Info</h2>

      <div className={style.wrapper}>
        <Input
          label="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          type="text"
        />
        <Input
          label="Card Number"
          placeholder="e.g. 1234 5678 9123"
          type="number"
        />

        <div className={style["flex-group"]}>
          <div className={style["grid-group"]}>
            <label htmlFor="" className={styleInput.label}>Exp. Date (MM/YY)</label>
            <input type="text" className={styleInput.input}/>
            <input type="text" className={styleInput.input}/>
          </div>
          <Input
            label="CVC"
            placeholder="e.g. 123"
            type="text"
          />
        </div>
      </div>

      <Button>Confirm</Button>
      {/* <Button>Continue</Button> */}
    </section>
  )
}

export default CardInfo
