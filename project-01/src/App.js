import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import BasicInfoForm from './BasicInfoForm'
import AddressInfoForm from './AddressInfoForm'
import { db } from './firestore'
import ErrorMessage from './components/ErrorMessage'

function saveData(data) {
  try {
    return db.collection('checkout').add(data)
  } catch (error) {
    console.log('===Error: saveData function')
    console.log(error)
  }
}

export default function App() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [diet, setDiet] = React.useState(null)
  console.log(firstName)

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
          {!isOnline && (
            <ErrorMessage label='Network is offline!!!'></ErrorMessage>
          )}
        </div>
      </div>
    </div>
  )
}
