import React from 'react'
import FormTitle from './components/FormTitle'
import FormFieldHeading from './components/FormFieldHeading'
import FormField from './components/FormField'
import FormLabel from './components/FormLabel'
import FormTextInput from './components/FormTextInput'
import FormSubmit from './components/FormSubmit'
import ErrorMessage from './components/ErrorMessage'

export default function BasicInfo({
  setFirstName,
  setLastName,
  isSaving,
  onClick,
}) {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [errorLabel, setErrorLabel] = React.useState('')

  function validation(args) {}
  const submit = event => {
    if (validation()) {
    }
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
      {errorLabel != '' && <ErrorMessage>errorLabel</ErrorMessage>}
      <FormSubmit
        onClick={onClick}
        isComplete={false}
        isLoading={false}
        isDisabled={isDisabled || isSaving}
        loadingText={false}
        submitText='Next'
        completeText='Complete'
      ></FormSubmit>
    </FormFieldHeading>
  )
}
