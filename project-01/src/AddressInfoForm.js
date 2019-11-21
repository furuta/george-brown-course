import React from 'react'
import FormFieldHeading from './components/FormFieldHeading'
import FormLabel from './components/FormLabel'
import FormTextInput from './components/FormTextInput'

export default function AddressInfo() {
  return (
    <FormFieldHeading>
      <FormLabel htmlFor='city' text='City'></FormLabel>
      <FormTextInput id='city'></FormTextInput>
    </FormFieldHeading>
  )
}
