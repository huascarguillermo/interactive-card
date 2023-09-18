import { useState } from "react"
import CardInfo from "./components/CardInfo/CardInfo"
import Header from "./components/Header"

function App() {

  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  })



  console.log(formData)


  return (
    <>
      <Header />
      <main>
        <CardInfo formData={formData} setFormData={setFormData}/>
      </main>
    </>
  )
}

export default App
