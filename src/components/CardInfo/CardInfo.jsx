import { useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import style from "./cardinfo.module.css"
import styleInput from "../Input/input.module.css"

function CardInfo({ formData, setFormData }) {
  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  })

  function handleInputChange(e) {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}

    if (formData.cardName ==='') {
      newErrors.cardName = "Can’t be blank"
    }
    if (formData.cardNumber ==='') {
      newErrors.cardNumber = "Can’t be blank"
    }
    if (formData.month ==='') {
      newErrors.month = "Can’t be blank"
    }
    if (formData.year ==='') {
      newErrors.year = "Can’t be blank"
    }
    if (formData.cvc ==='') {
      newErrors.cvc = "Can’t be blank"
    }

    setErrors(newErrors)
    console.log('errores',errors)

    if(Object.keys(newErrors).length === 0){
      console.log("To ta lleno")
    }
  }

  return (
    <section>
      <h2 className="visually-hidden">Card Info</h2>

      <form onSubmit={handleSubmit} className={style.wrapper}>
        <Input
          label="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
        />
        <Input
          label="Card Number"
          placeholder="e.g. 1234 5678 9123"
          type="number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />

        <div className={style["flex-group"]}>
          <div className={style["grid-group"]}>
            <label htmlFor="" className={styleInput.label}>
              Exp. Date (MM/YY)
            </label>
            <input
              type="text"
              className={styleInput.input}
              placeholder="MM"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className={styleInput.input}
              placeholder="YY"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <Input
            label="CVC"
            placeholder="e.g. 123"
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleInputChange}
          />
        </div>
        <Button>Confirm</Button>
      </form>

      {/* <Button>Continue</Button> */}
    </section>
  )
}

export default CardInfo
