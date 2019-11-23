import React from 'react'
import FormFieldHeading from './components/FormFieldHeading'
import FormLabel from './components/FormLabel'
import FormTextInput from './components/FormTextInput'
import FormField from './components/FormField'
import FormSubmit from './components/FormSubmit'
import ErrorMessage from './components/ErrorMessage'
import { Dropdown } from 'react-bootstrap'

export default function AddressInfo({
  setCity,
  cityValue,
  setProvince,
  provinceValue,
  onSubmit,
}) {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [errorLabel, setErrorLabel] = React.useState('')
  const [dropValue, setDropValue] = React.useState(provinceValue || 'select')

  const changeItem = item => {
    setDropValue(item)
    setProvince(item)
  }

  const values = [
    'select',
    'Alberta',
    'British Colombia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland',
    'Nova Scotia',
    'North West Territories',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon Territory',
  ]

  return (
    <FormFieldHeading>
      <FormField>
        <FormLabel htmlFor='city' text='City'></FormLabel>
        <FormTextInput
          id='city'
          setValue={setCity}
          value={cityValue}
        ></FormTextInput>
      </FormField>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          {dropValue}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => changeItem(values[0])}
            href='#/action-0'
          >
            {values[0]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[1])}
            href='#/action-1'
          >
            {values[1]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[2])}
            href='#/action-2'
          >
            {values[2]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[3])}
            href='#/action-3'
          >
            {values[3]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[4])}
            href='#/action-4'
          >
            {values[4]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[5])}
            href='#/action-5'
          >
            {values[5]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[6])}
            href='#/action-6'
          >
            {values[6]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[7])}
            href='#/action-7'
          >
            {values[7]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[8])}
            href='#/action-8'
          >
            {values[8]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[9])}
            href='#/action-9'
          >
            {values[9]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[10])}
            href='#/action-10'
          >
            {values[10]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[11])}
            href='#/action-11'
          >
            {values[11]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[12])}
            href='#/action-12'
          >
            {values[12]}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeItem(values[13])}
            href='#/action-13'
          >
            {values[13]}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FormSubmit
        onClick={onSubmit}
        isComplete={false}
        isLoading={false}
        isDisabled={isDisabled}
        loadingText={false}
        submitText={'next'}
        completeText='Complete'
      >
        Next
      </FormSubmit>
      {errorLabel !== '' && <ErrorMessage>errorLabel</ErrorMessage>}
    </FormFieldHeading>
  )
}
