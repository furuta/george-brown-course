import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import BasicInfoForm from './BasicInfoForm'
import AddressInfoForm from './AddressInfoForm'
import { db } from './firestore'

export default function App() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [diet, setDiet] = React.useState(null)
  console.log(firstName)

  const [isSaving, setIsSaving] = React.useState(false)
  const saveData = event => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      diet: diet,
    }
    try {
      setIsSaving(true)
      db.collection('checkout')
        .add(data)
        .then(() => {
          setIsSaving(false)
        })
      console.log('continue')
    } catch (error) {
      console.log('===Error: saveData function===')
      console.log(error)
    }
  }

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
