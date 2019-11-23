import React from 'react'
import FormFieldHeading from './components/FormFieldHeading'
import FormLabel from './components/FormLabel'
import FormTextInput from './components/FormTextInput'
import FormField from './components/FormField'
import FormSubmit from './components/FormSubmit'
import ErrorMessage from './components/ErrorMessage'
import { Dropdown } from "react-bootstrap"

export default function PaymentInfo({ setCity, setProvince, onSubmit }) {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [errorLabel, setErrorLabel] = React.useState('')
  const [dropValue, setDropValue] = React.useState('select')
  const [payment, setPayment] = React.useState("")
  const [agreed, setAgreed] = React.useState(false)

  const changeItem = item => {
    setDropValue(item);
    setProvince(item);
  }

  const agreeTerms = () => {
    agreed ? setAgreed(false) : setAgreed(true);
  }

  const paymentType = (type) => {
    setPayment(type);
  }

  const check = () => {
    if (agreed === true && payment !== "") {
      return false;
    } else {
      return true;
    }
  }

  return (
    <FormFieldHeading>
      <div>
        <input onChange={() => paymentType("bitcoin")} type="radio" value="bitcoin" name="payment"/>
        Bitcoin
      </div>
      <div>
        <input onChange={() => paymentType("Paypal")} type="radio" value="Paypal" name="payment"/>
        Paypal
      </div>
      <div>
        <input onChange={() => paymentType("Credit Card")} type="radio" value="Credit Card" name="payment"/>
        Credit Card
      </div>
      <div>
        <input onChange={agreeTerms} type="checkbox" value={agreed}/>
        Agree to Terms and Conditions
      </div>
      
      
      <FormSubmit
        onClick={onSubmit}
        isComplete={false}
        isLoading={false}
        isDisabled={check}
        loadingText={false}
        submitText={"next"}
        completeText='Complete'
      >Next</FormSubmit>
      {errorLabel !== '' && <ErrorMessage>errorLabel</ErrorMessage>}

    </FormFieldHeading>
  )
}
