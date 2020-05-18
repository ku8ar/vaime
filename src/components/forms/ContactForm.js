import React, { useState } from 'react'
import Form from '../field/Form'
import { Input, TextArea } from '../field/Input'
import { Button } from '../Base'

export default () => {
  const [values, setValues] = useState({})

  return (
    <Form values={values} setValues={setValues}>
      <Input field='name' type='text' placeholder='Imię, nazwisko' />
      <Input field='email' type='text' placeholder='Twój e-mail' />
      <Input field='title' type='text' placeholder='Temat' />
      <TextArea field='surname' placeholder='Twoja wiadomość' />
      <Button>Wyślij</Button>
    </Form>
  )
}