import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import BasicInfo from './BasicInfoForm'
import PaymentInfo from './PaymentInfoForm'
import AddressInfoForm from './AddressInfoForm'
import { db } from './firestore'
import ErrorMessage from './components/ErrorMessage'

export default function App() {
  const [status, setStatus] = React.useState(
    Number(localStorage.getItem('status')) || 0,
  )
  const [firstName, setFirstName] = React.useState(
    localStorage.getItem('firstName') || '',
  )
  const [lastName, setLastName] = React.useState(
    localStorage.getItem('lastName') || '',
  )
  const [diet, setDiet] = React.useState(localStorage.getItem('diet') || 'none')
  const [city, setCity] = React.useState(localStorage.getItem('city') || '')
  const [province, setProvince] = React.useState(
    localStorage.getItem('province') || '',
  )

  const [isSaving, setIsSaving] = React.useState(false)
  const saveData = event => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      diet: diet,
      city: city,
      province: province,
    }
    try {
      setIsSaving(true)
      db.collection('checkout')
        .add(data)
        .then(() => {
          setIsSaving(false)
        })
    } catch (error) {
      console.log('===Error: saveData function===')
      console.log(error)
    }
  }
  const [isOnline, setIsOnline] = React.useState(navigator.onLine)
  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const nextForm = () => {
    if (status === 0) {
      setStatus(1)
    } else if (status === 1) {
      setStatus(2)
    }
  }
  React.useEffect(() => {
    localStorage.setItem('status', status)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('diet', diet)
    localStorage.setItem('city', city)
    localStorage.setItem('province', province)
    console.log(status)
    console.log(firstName)
    console.log(lastName)
    console.log(diet)
    console.log(city)
    console.log(province)
  })

  const formSelect = () => {
    if (status === 0) {
      return (
        <BasicInfo
          setFirstName={setFirstName}
          firstNameValue={firstName}
          setLastName={setLastName}
          lastNameValue={lastName}
          setDiet={setDiet}
          dietValue={diet}
          onSubmit={nextForm}
        />
      )
    } else if (status === 1) {
      return (
        <AddressInfoForm
          setCity={setCity}
          cityValue={city}
          setProvince={setProvince}
          provinceValue={province}
          onSubmit={nextForm}
        />
      )
    } else if (status === 2) {
      return <PaymentInfo onSubmit={saveData} />
    }
  }

  return (
    <div className='App'>
      <div className='App-Content'>
        <div>
          <FormTitle>Checkout</FormTitle>

          {formSelect()}
          {!isOnline && (
            <ErrorMessage label='Network is offline!!!'></ErrorMessage>
          )}
        </div>
      </div>
    </div>
  )
}
