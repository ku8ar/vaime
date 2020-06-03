import React, { useState, useEffect, useCallback } from 'react'
import { path, pipe, defaultTo, head, propOr, toLower, includes, prop } from 'rambda'
import styled from 'styled-components'
import { Button, P } from '../Base'
import { Input, TextArea } from '../field/Input'
import Checkbox from '../field/Checkbox'
import Select from '../field/Select'
import Calendar from '../field/Calendar'
import Form from '../field/Form'
import FieldSection from '../field/FieldSection'
import TourInfo from '../field/TourInfo'
import { calcDate } from '../../utils/date'

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !re.test(String(email).toLowerCase()) ? 'Wprowadź poprawny adres e-mail' : null
}

const validateAdults = (adults, seats, minSeats) => {
  if (!adults || adults < 0) return 'Wprowadź dane'
  if (seats && adults > seats) return 'Niepoprawna liczba miejsc'
  if (minSeats && adults < minSeats) return 'Niepoprawna liczba miejsc'
}

const validateChildren = (children) => {
  if (children > 4) return 'Niepoprawna liczba miejsc'
}

const getIsFromTbilisi = pipe(
  defaultTo([]),
  head,
  propOr('', 'place'),
  toLower,
  includes('tbilisi')
)

const getOneDayStartDate = pipe(
  defaultTo([]),
  head,
  prop('startDate')
)

const getOneDayEndDate = pipe(
  defaultTo([]),
  head,
  prop('endDate')
)

// @TODO: this form looks like shit. Refactor it
export default ({ title, thumb, oneDay, minSeats, terms, onClose, schedule }) => {
  const [values, setValues] = useState({
    date: 0
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSended, setIsSended] = useState(false)

  const seats = path([values.date, 'seats'], terms)
  const options = terms.map(({ startDate, endDate }) => calcDate(startDate, endDate))

  const [errors, setErrors] = useState({})
  const [sender, setSender] = useState(0)

  const fromTbilisi = getIsFromTbilisi(schedule)

  const oneDayStartDate = getOneDayStartDate(terms)
  const oneDayEndDate = getOneDayEndDate(terms)

  useEffect(() => {
    if (values.date) setErrors({ ...errors, date: null })
  }, [values.date])

  useEffect(() => {
    if (values.name) setErrors({ ...errors, name: null })
  }, [values.name])

  useEffect(() => {
    if (values.surname) setErrors({ ...errors, surname: null })
  }, [values.surname])

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
    if (values.children) setErrors({ ...errors, children: null })
  }, [values.children])

  useEffect(() => {
    if (values.accomodation && values.extraPayment) setValues({ ...values, extraPayment: false })
  }, [values.accomodation])

  useEffect(() => {
    if (values.accomodation && values.extraPayment) setValues({ ...values, accomodation: false })
  }, [values.extraPayment])

  const alone = values.adults === 1 && !oneDay

  const send = useCallback(() => {
    setErrors({
      date: oneDay ? !values.date && 'Wprowadź dane' : null,
      name: !values.name && 'Wprowadź dane',
      surname: !values.surname && 'Wprowadź dane',
      email: validateEmail(values.email),
      approve: !values.approve && 'Potrzebujemy Twojej zgody',
      extraPayment: alone && !values.accomodation && !values.extraPayment && 'Zaznacz przynajmniej jedną z opcji',
      adults: validateAdults(values.adults, seats, minSeats),
      children: validateChildren(values.children)
    })
    setSender(s => s + 1)
  }, [values, errors, alone])

  useEffect(() => {
    if (sender && !Object.values(errors).filter(Boolean).length) {
      setIsSubmitting(true)
      const { date, ...tourDetails } = values
      const { startDate, endDate, price } = terms[date] || {}
      const body = { ...tourDetails, startDate, endDate, title, price, date: startDate ? calcDate(startDate, endDate) : date, oneDay, fromTbilisi }
      fetch("/.netlify/functions/send-tour-email", {
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

  useEffect(() => {
    if (isSended) {
      setTimeout(onClose, 3000)
    }
  }, [isSended])

  return (
    <Form values={values} errors={errors} setValues={setValues}>
      <TourInfo title={title} thumb={thumb}>
        {oneDay ? <Calendar field="date" min={oneDayStartDate} max={oneDayEndDate} /> : <Select field="date" options={options} />}
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
          <SmallCell><Input field='adults' type='number' placeholder='Dorośli' min={minSeats} max={seats} /></SmallCell>
          <SmallCell><Input field='children' type='number' placeholder='Dzieci (do 6 roku życia)' min={0} max={4} /></SmallCell>
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
      <Row><Button type="submit" onClick={send} green={isSended} disabled={isSubmitting || isSended}>{isSended ? 'Rezerwacja zgłoszona' : 'Rezerwuj Online*'}</Button></Row>
      <Row><SmallText>*Po dokonaniu rezerwacji skontaktujemy się w ciągu 72h!</SmallText></Row>
    </Form>
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
    margin-bottom: .25rem;
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
    margin-top: .25rem;
  `}
`
