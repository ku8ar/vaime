import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Form from '../field/Form'
import { Input, TextArea } from '../field/Input'
import { Button } from '../Base'

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !re.test(String(email).toLowerCase()) ? 'Wprowadź poprawny adres e-mail' : null
}

export default () => {
  const [values, setValues] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSended, setIsSended] = useState(false)
  const [errors, setErrors] = useState({})
  const [sender, setSender] = useState(0)

  const send = useCallback(() => {
    setErrors({
      name: !values.name && 'Wprowadź dane',
      surname: !values.surname && 'Wprowadź dane',
      email: validateEmail(values.email),
      description: !values.description && 'Wprowadź dane',
    })
    setSender(s => s + 1)
  }, [values, errors])

  useEffect(() => {
    if (sender && !Object.values(errors).filter(Boolean).length) {
      setIsSubmitting(true)
      fetch("/.netlify/functions/send-contact-email", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(response => {
          if (response.ok) {
            setIsSended(true)
          } else {
            setIsSubmitting(false)
            alert('Wystąpił błąd.')
          }
        })
        .catch(() => {
          setIsSubmitting(false)
          alert('Wystąpił błąd.')
        })
    }
  }, [sender])

  return (
    <Form values={values} errors={errors} setValues={setValues}>
      <Row>
        <SmallCell><Input field='name' type='text' placeholder='Imię' /></SmallCell>
        <SmallCell><Input field='surname' type='text' placeholder='Nazwisko' /></SmallCell>
      </Row>
      <Input field='email' type='text' placeholder='Twój e-mail' />
      <Input field='title' type='text' placeholder='Temat' />
      <TextArea field='description' placeholder='Twoja wiadomość' />
      <Button type="submit" onClick={send} green={isSended} disabled={isSubmitting || isSended}>{isSended ? 'Wysłano' : 'Wyślij'}</Button>
    </Form>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: .5rem;
  ${p => p.theme.mobile`
    flex-direction: column;
    margin-bottom: 0;
  `}
`

const SmallCell = styled.div`
  width: 50%;
  margin-left: 1rem;
  margin-right: 1rem;
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }
  ${p => p.theme.mobile`
    margin: 0;
    width: 100%;
    margin-top: .5rem;
  `}
`