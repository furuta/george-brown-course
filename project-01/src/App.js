import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import BasicInfoForm from './BasicInfoForm'
import AddressInfoForm from './AddressInfoForm'

export default function App() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [diet, setDiet] = React.useState(null)
  console.log(firstName)
  return (
    <div className='App'>
      <div className='App-Content'>
        <div>
          <FormTitle>Checkout</FormTitle>

          {/* Put your solution here 👇 */}
          <BasicInfoForm
            setFirstName={setFirstName}
            setLastName={setLastName}
            setDiet={setDiet}
          ></BasicInfoForm>
          <AddressInfoForm></AddressInfoForm>
        </div>
      </div>
    </div>
  )
}
