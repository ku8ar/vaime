import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Button, P } from '../Base'
import { Input, TextArea } from '../field/Input'
import Checkbox from '../field/Checkbox'
import Select from '../field/Select'
import Form from '../field/Form'
import FieldSection from '../field/FieldSection'
import PriceSummary from '../field/PriceSummary'
import TourInfo from '../field/TourInfo'
import { calcDate } from '../../utils/date'

export default ({ title, thumb, terms }) => {
  const [values, setValues] = useState({
    date: 0
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSended, setIsSended] = useState(false)

  const tour = terms[values.date]
  const { seats, price } = tour
  const adults = Number(values.adults) || 1
  const options = terms.map(({ startDate, endDate }) => calcDate(startDate, endDate))

  const [errors, setErrors] = useState({})
  const [sender, setSender] = useState(0)

  useEffect(() => {
    if (values.email) setErrors({ ...errors, email: null })
  }, [values.email])

  useEffect(() => {
    if (values.approve) setErrors({ ...errors, approve: null })
  }, [values.approve])

  useEffect(() => {
    if (values.accomodation || values.extraPayment) setErrors({ ...errors, extraPayment: null })
  }, [values.accomodation, values.extraPayment])

  useEffect(() => {
    if (values.adults) setErrors({ ...errors, adults: null })
  }, [values.adults])

  useEffect(() => {
    if (values.accomodation && values.extraPayment) setValues({...values, extraPayment: false})
  }, [values.accomodation])

  useEffect(() => {
    if (values.accomodation && values.extraPayment) setValues({...values, accomodation: false})
  }, [values.extraPayment])

  const send = useCallback(() => {
    setErrors({
      email: !values.email && 'Wprowadź dane',
      approve: !values.approve && 'Potrzebujemy Twojej zgody',
      extraPayment: values.adults === 1 && !values.accomodation && !values.extraPayment && 'Zaznacz przynajmniej jedną z opcji',
      adults: !values.adults && 'Wprowadź dane'
    })
    setSender(s => s + 1)
  }, [values, errors])

  useEffect(() => {
    if (sender && !Object.values(errors).filter(Boolean).length) {
      setIsSubmitting(true)
      const { date, ...tourDetails } = values
      const { startDate, endDate } = terms[date]
      const body = { ...tourDetails, startDate, endDate }
      fetch("/.netlify/functions/send-contact-email", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
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

  const alone = values.adults === 1

  return !isSended ? (
    <Form values={values} errors={errors} setValues={setValues}>
      <TourInfo title={title} thumb={thumb}>
        <Select field="date" options={options} />
      </TourInfo>
      <FieldSection title="Dane Osoby Rezerwującej">
        <Row>
          <SmallCell><Input field='name' type='text' placeholder='Imię' /></SmallCell>
          <SmallCell><Input field='surname' type='text' placeholder='Nazwisko' /></SmallCell>
        </Row>
        <Row>
          <SmallCell><Input field='email' type='email' placeholder='E-mail' /></SmallCell>
          <SmallCell><Input field='phone' type='text' placeholder='Numer telefonu' /></SmallCell>
        </Row>
      </FieldSection>
      <FieldSection title="Liczba Uczestników Wycieczki">
        <Row>
          <SmallCell><Input field='adults' type='number' placeholder='Dorośli' min={0} max={seats} /></SmallCell>
          <SmallCell><Input field='children' type='number' placeholder='Dzieci (do 6 roku życia)' min={0} max={2} /></SmallCell>
        </Row>
      </FieldSection>
      {alone && (
        <FieldSection title="Podrózuję sam, zgadzam się na">
          <Row><BigCell><Checkbox field='accomodation' label='Dokwaterowanie do drugiej osoby' /></BigCell></Row>
          <Row><BigCell><Checkbox field='extraPayment' label='Dopłatę w wys. 100 EUR za pokój jednoosobowy' /></BigCell></Row>
        </FieldSection>
      )}
      <FieldSection title="Preferencje" info="termin, dieta, choroby, preferencje co do pokoju hotelowego, itd...">
        <Row>
          <BigCell><TextArea field='description' placeholder='Dodatkowe informacje' rows={1} /></BigCell>
        </Row>
      </FieldSection>
      <FieldSection title="Oświadczenia" info="Przetwarzamy dane osobowe wyłącznie w celu przygotowania i zawarcia umowy o świadczenie usług turystycznych">
        <Row>
          <BigCell>
            <Checkbox field='approve' label='Zgadzam się na przetwarzanie danych osobowych' />
          </BigCell>
        </Row>
      </FieldSection>
      <Row><Button type="submit" onClick={send} disabled={isSubmitting}>Rezerwuj Online*</Button></Row>
      <Row><SmallText>*Po dokonaniu rezerwacji skontaktujemy się w ciągu 72h!</SmallText></Row>
    </Form>
  ) : (
    <SendedWrapper>
      <SendedTitle>
        Rezerwacja została zgłoszona
      </SendedTitle>
    </SendedWrapper>
  )
}

const SmallText = styled(P)`
  font-size: .75rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: .5rem;
  ${p => p.theme.mobile`
    flex-direction: column;
    margin-bottom: 0;
  `}
`

const BigCell = styled.div`
  width: 100%;
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
  `}
`

const SendedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SendedTitle = styled.h4``