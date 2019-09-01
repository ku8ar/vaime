import React, { useCallback } from 'react'
import Form from '../Form'

const fieldset = [
  {type: 'text', name:'name', placeholder: 'Imię, nazwisko', icon: 'person'},
  {type: 'email', name:'email', placeholder: 'Twój e-mail', icon: 'envelope'},
  {type: 'text', name:'phone', placeholder: 'Telefon', icon: 'comment'},
  {type: 'number', name:'adults', placeholder: 'Dorośli + 16', icon: 'comment'},
  {type: 'number', name:'children', placeholder: 'Dzieci', icon: 'comment'},
  {type: 'textarea', name:'description', placeholder: 'Dodatkowe informacje (termin, dieta, choroby, preferencje co do pokoju hotelowego, itd...)', rows: 2},
  {type: 'checkbox', name:'approve', value: 'Zgadzam się na przetwarzanie moich danych osobowych wyłącznie w celu przygotowania i zawarcia umowy o świadczenie usług turystycznych'},
]

export default () => {
  const onSubmit = useCallback(() => {}, [])
  return <Form fieldset={fieldset} onSubmit={onSubmit} />
}