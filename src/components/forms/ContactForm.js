import React, { useCallback } from 'react'
import Form from '../Form'

const fieldset = [
  {type: 'text', name:'name', placeholder: 'Imię, nazwisko', icon: 'person'},
  {type: 'email', name:'email', placeholder: 'Twój e-mail', icon: 'envelope'},
  {type: 'text', name:'title', placeholder: 'Temat', icon: 'comment'},
  {type: 'textarea', name:'description', placeholder: 'Twoja wiadomość', rows: 20}
]

export default () => {
  const onSubmit = useCallback(() => {}, [])
  return <Form fieldset={fieldset} onSubmit={onSubmit} />
}