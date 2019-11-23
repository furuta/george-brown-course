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

  const changeItem = item => {
    setDropValue(item);
    setProvince(item);
  }

  const values = ["select", "Alberta", "British Colombia", "Manitoba", "New Brunswick", "Newfoundland", "Nova Scotia", "North West Territories", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"]


  return (
    <FormFieldHeading>
      <div>
        <input type="radio" value="bitcoin"/>
        Bitcoin
      </div>
      <div>
        <input type="radio" value="Paypal"/>
        Paypal
      </div>
      <div>
        <input type="radio" value="Credit Card"/>
        Credit Card
      </div>
      <div>
        <input type="checkbox" value={false}/>
        Agree to Terms and Conditions
      </div>
      
      
      <FormSubmit
        onClick={onSubmit}
        isComplete={false}
        isLoading={false}
        isDisabled={isDisabled}
        loadingText={false}
        submitText={"next"}
        completeText='Complete'
      >Next</FormSubmit>
      {errorLabel !== '' && <ErrorMessage>errorLabel</ErrorMessage>}

    </FormFieldHeading>
  )
}
