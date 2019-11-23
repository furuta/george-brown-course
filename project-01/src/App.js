import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import BasicInfo from './BasicInfoForm'
import AddressInfoForm from './AddressInfoForm'


export default function App() {
  const [status, setStatus] = React.useState(0)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [diet, setDiet] = React.useState(null)
  const [city, setCity] = React.useState('')
  const [province, setProvince] = React.useState('')
  
  console.log(firstName)

  const nextForm = () => {
    if (status === 0) {
      setStatus(1);
    } else if (status === 1) {
      setStatus(2);
    } 
    console.log(status)
    console.log(firstName)
    console.log(lastName)
    console.log(diet)
  }
  const formSelect = () => {
    if (status === 0) {
      return (<BasicInfo
        setFirstName={setFirstName}
        setLastName={setLastName}
        setDiet={setDiet}
        onSubmit={nextForm}
      />);
    } else if (status === 1) {
      return (<AddressInfoForm
        setCity={setCity}
        setProvince={setProvince}
        onSubmit={nextForm} />);
    }
  }
  return (
    <div className='App'>
      <div className='App-Content'>
        <div>
          <FormTitle>Checkout</FormTitle>

          {formSelect()}
        </div>
      </div>
    </div>
  )
}
