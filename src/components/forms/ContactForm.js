import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useDict from 'src/hooks/dict'
import Form from '../field/Form'
import { Input, TextArea } from '../field/Input'
import { Button } from '../Base'

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return !re.test(String(email).toLowerCase()) ? true : null
}

export default () => {
  const [values, setValues] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSended, setIsSended] = useState(false)
  const [errors, setErrors] = useState({})
  const [sender, setSender] = useState(0)

  const nameText = useDict("name")
  const surnameText = useDict("surname")
  const yourEmailText = useDict("yourEmail")
  const subjectText = useDict("subject")
  const yourMessage = useDict("yourMessage")
  const sentText = useDict("sent")
  const sendText = useDict("send")
  const enterYourDetailsText = useDict("enterYourDetails")
  const enterValidEmailText = useDict("enterValidEmail")
  const errorMessage = useDict("errorMessage")

  const send = useCallback(() => {
    setErrors({
      name: !values.name && enterYourDetailsText,
      surname: !values.surname && enterYourDetailsText,
      email: validateEmail(values.email) ? enterValidEmailText : null,
      description: !values.description && enterYourDetailsText,
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
            alert(errorMessage)
          }
        })
        .catch(() => {
          setIsSubmitting(false)
          alert(errorMessage)
        })
    }
  }, [sender])

  return (
    <Form values={values} errors={errors} setValues={setValues}>
      <FirstRow>
        <SmallCell><Input field='name' type='text' placeholder={nameText} filled /></SmallCell>
        <SmallCell><Input field='surname' type='text' placeholder={surnameText} filled /></SmallCell>
      </FirstRow>
      <Row>
        <SmallCell><Input field='email' type='text' placeholder={yourEmailText} filled /></SmallCell>
        <SmallCell><Input field='title' type='text' placeholder={subjectText} filled /></SmallCell>
      </Row>
      <TextArea field='description' placeholder={yourMessage} filled />
      <Button type="submit" onClick={send} green={isSended} disabled={isSubmitting || isSended}>{isSended ? sentText : sendText}</Button>
    </Form>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  ${p => p.theme.mobile`
    flex-direction: column;
    margin-bottom: 0;
  `}
`

const FirstRow = styled(Row)`
  margin-bottom: 1rem;
`

const SmallCell = styled.div`
  width: 50%;
  margin-left: .5rem;
  margin-right: .5rem;
  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }
  ${p => p.theme.mobile`
    margin: 0;
    width: 100%;
    margin-top: .5rem;
  `}
`