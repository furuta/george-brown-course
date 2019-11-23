import React from 'react'
import FormTitle from './components/FormTitle'
import FormFieldHeading from './components/FormFieldHeading'
import FormField from './components/FormField'
import FormLabel from './components/FormLabel'
import FormTextInput from './components/FormTextInput'
import FormSubmit from './components/FormSubmit'
import ErrorMessage from './components/ErrorMessage'
import { Dropdown } from 'react-bootstrap'

export default function BasicInfo({
  setFirstName,
  setLastName,
  setDiet,
  onSubmit,
}) {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [errorLabel, setErrorLabel] = React.useState('')
  const [dropValue, setDropValue] = React.useState('none')

  const values = ['none', 'vegetarian', 'vegan', 'Halal/Kosher']

  function validation(args) {}
  const submit = event => {
    if (validation()) {
    }
  }

  const changeItem = item => {
    setDropValue(item)
    setDiet(item)
  }
  return (
    <FormFieldHeading>
      <FormField>
        <FormLabel htmlFor='first_name' text='First Name'></FormLabel>
        <FormTextInput id='first_name' setValue={setFirstName}></FormTextInput>
      </FormField>
      <FormField>
        <FormLabel htmlFor='last_name' text='Last Name'></FormLabel>
        <FormTextInput id='last_name' setValue={setLastName}></FormTextInput>
      </FormField>

      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          {dropValue}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => changeItem(values[0])}
            href='#/action-1'
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
