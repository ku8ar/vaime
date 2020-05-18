import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import Form from '../field/Form'
import { Input, TextArea } from '../field/Input'
import { Button } from '../Base'

export default () => {
  const [values, setValues] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSended, setIsSended] = useState(false)
  const [errors, setErrors] = useState({})
  const [sender, setSender] = useState(0)

  const send = useCallback(() => {
    setErrors({
      email: !values.email && 'Wprowadź dane',
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

  return !isSended ? (
    <Form values={values} errors={errors} setValues={setValues}>
      <Input field='name' type='text' placeholder='Imię, nazwisko' />
      <Input field='email' type='text' placeholder='Twój e-mail' />
      <Input field='title' type='text' placeholder='Temat' />
      <TextArea field='description' placeholder='Twoja wiadomość' />
      <Button type="submit" onClick={send} disabled={isSubmitting}>Wyślij</Button>
    </Form>
  ) : (
      <SendedWrapper>
        <SendedTitle>
          Zgłoszenie zostało wysłane
        </SendedTitle>
      </SendedWrapper>
    )
}

const SendedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SendedTitle = styled.h4``