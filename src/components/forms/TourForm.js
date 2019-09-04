import React, { useCallback } from 'react'
import { prop } from 'rambda'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { Button, H2, H4, H6, P } from '../Base'
import { FormInput } from '../Form'

export default ({startDate, endDate, price}) => {
  const onSubmit = useCallback(() => { }, [])
  return (
    <Formik
      initialValues={initialValues}
      validate={() => { }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, ...props }) => {
        const adults = Number(prop('adults', props.values)) || 1
        return (
          <FormWrapper>
            <Section>
              <OrderInfo no={1} title="Dane Osoby Rezerwującej" />
              <Row>
                <SmallCell>
                  <FormInput type='text' name='name' placeholder='Imię' />
                </SmallCell>
                <SmallCell>
                  <FormInput type='text' name='surname' placeholder='Nazwisko' />
                </SmallCell>
              </Row>
              <Row>
                <SmallCell>
                  <FormInput type='email' name='email' placeholder='E-mail' />
                </SmallCell>
                <SmallCell>
                  <FormInput type='text' name='phone' placeholder='Numer telefonu' />
                </SmallCell>
              </Row>
            </Section>
            <Section>
              <OrderInfo no={2} title="Liczba Uczestników Wycieczki" />
              <Row twoRows>
                <SmallCell>
                  <FormInput type='number' name='adults' placeholder='Dorośli' />
                </SmallCell>
                <SmallCell>
                  <FormInput type='number' name='children' placeholder='Dzieci (do 6 roku życia)' />
                </SmallCell>
              </Row>
            </Section>
            <Section>
              <OrderInfo no={3} title="Preferencje" />
              <Row>
                <BigCell>
                  <FormInput type='textarea' name='description' placeholder='Dodatkowe informacje (termin, dieta, choroby, preferencje co do pokoju hotelowego, itd...)' />
                </BigCell>
              </Row>
            </Section>
            <Section>
              <OrderInfo no={4} title="Oświadczenia" />
              <Row>
                <BigCell>
                  <FormInput type='checkbox' name='approve' label='Zgadzam się na przetwarzanie moich danych osobowych wyłącznie w celu przygotowania i zawarcia umowy o świadczenie usług turystycznych' />
                </BigCell>
              </Row>
            </Section>
            <LastSection>
              <OrderInfo no={5} title="Podsumowanie" />
              <PriceWrapper>
                <PriceText>Razem</PriceText>
                <PriceAmount>{price * adults}</PriceAmount>
                <PriceCurrency>EUR</PriceCurrency>
              </PriceWrapper>
            </LastSection>
            <Row>
              <Button type="submit" disabled={isSubmitting}>Rezerwuj Online*</Button>
            </Row>
            <Row>
              <SmallText>*Po dokonaniu rezerwacji skontaktujemy się z Tobą w ciągu 72h!</SmallText>
            </Row>
          </FormWrapper>
        )
      }}
    </Formik>
  )
}

const SmallText = styled(P)`
  font-size: .75rem;
`

const LastSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  ${p => p.theme.mobile`
    margin-top: 1rem;
  `}
`
const PriceText = styled(H6)`
  margin: 0;
  font-weight: ${p => p.theme.weightBolder};
  color: ${p => p.theme.colorPrimary};
`
const PriceAmount = styled(H2)`
  margin: 0;
  font-weight: ${p => p.theme.weightBolder};
  margin: 0 .5rem;
  color: ${p => p.theme.colorPrimary};
`
const PriceCurrency = styled(P)`
  margin: 0;
  font-weight: ${p => p.theme.weightBolder};
  color: ${p => p.theme.colorPrimary};
`

const Section = styled.div`
  margin-bottom: 2rem;
  ${p => p.theme.mobile`
    margin-bottom: 0;
  `}
`

const OrderInfo = ({ no, title }) => (
  <OrderInfoWrapper>
    <OrderInfoText>{title}</OrderInfoText>
  </OrderInfoWrapper>
)

const OrderInfoWrapper = styled.div`
  display: flex;
  ${p => p.theme.mobile`
    display: none;
  `}
`
const OrderInfoNo = styled(P)`
  background-color: transparent;
  color: ${p => p.theme.colorPrimary};
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colorPrimary};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`
const OrderInfoText = styled(P)`
  text-transform: uppercase;
  flex: 1;
  color: ${p => p.theme.colorSecondary};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: .5rem;
  ${p => p.theme.mobile`
    flex-direction: ${p => p.twoRows ? 'row' : 'column'};
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
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${p => p.theme.mobile`
    margin: 0;
    width: 100%;
  `}
`

const initialValues = {

}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`