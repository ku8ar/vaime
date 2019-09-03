import React, { useCallback } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { Button, P } from '../Base'
import { FormInput } from '../Form'

export default () => {
  const onSubmit = useCallback(() => { }, [])
  return (
    <Formik
      initialValues={initialValues}
      validate={() => { }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
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
            <Row>
              <SmallCell>
                <FormInput type='number' name='adults' placeholder='Dorośli + 16' />
              </SmallCell>
              <SmallCell>
                <FormInput type='number' name='children' placeholder='Dzieci' />
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
          <Section>
            <OrderInfo no={5} title="Podsumowanie" />
            <Button type="submit" disabled={isSubmitting}>Rezerwuj Online</Button>
          </Section>

        </FormWrapper>
      )}
    </Formik>
  )
}

const Section = styled.div`
  margin-bottom: 2rem;
  ${p => p.theme.mobile`
    margin-bottom: 0;
  `}
`

const OrderInfo = ({ no, title }) => (
  <OrderInfoWrapper>
    <OrderInfoNo>{no}</OrderInfoNo>
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