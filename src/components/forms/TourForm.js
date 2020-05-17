import React, { useState } from 'react'
import { prop } from 'rambda'
import styled from 'styled-components'
import { Button, P } from '../Base'
import { Input, TextArea } from '../field/Input'
import Checkbox from '../field/Checkbox'
import Form from '../field/Form'
import FieldSection from '../field/FieldSection'
import PriceSummary from '../field/PriceSummary'

export default ({ startDate, endDate, seats }) => {
  const [values, setValues] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const price = 0
  const adults = Number(prop('adults', values)) || 1

  return (
    <Form values={values} setValues={setValues}>
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
          <SmallCell><Input field='adults' type='number' placeholder='Dorośli' max={seats} /></SmallCell>
          <SmallCell><Input field='children' type='number' placeholder='Dzieci (do 6 roku życia)' /></SmallCell>
        </Row>
      </FieldSection>
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
      <FieldSection last title="Podsumowanie">
        <PriceSummary price={price} adults={adults} />
      </FieldSection>
      <Row><Button type="submit" disabled={isSubmitting}>Rezerwuj Online*</Button></Row>
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
