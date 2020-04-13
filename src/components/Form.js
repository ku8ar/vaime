import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from './Base'
import Icon from './InputIcon'
import Checkbox from './input/Checkbox'

export default ({ fieldset, onSubmit }) => {
  const initialValues = useInitialValues(fieldset)
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormWrapper>
          {fieldset.map(field => <FormInput key={field.name} {...field} />)}
          <Button type="submit" disabled={isSubmitting}>Wyślij</Button>
        </FormWrapper>
      )}
    </Formik>
  )
}

const useInitialValues = (fieldset) => useMemo(
  () => fieldset.reduce((acc, field) =>
    ({ ...acc, [field.name]: field.initialValue }),
    {}), [])

const validate = values =>
  Object.entries(values)
    .reduce((acc, [key, value]) => 
      !value && value !== 0 ? { ...acc, [key]: 'To pole jest wymagane' } : acc
    , {})

const getFormComponent = (type) => {
  switch (true) {
    case type === 'textarea': return TextArea
    case type ==='checkbox': return Checkbox
    default: return Input
  }
}

export const FormInput = ({ type, name, icon, ...props }) => (
  <FormInputWrapper>
    <FieldWrapper>
      <Icon name={icon} />
      <Field type={type} name={name} component={getFormComponent(type)} {...props} />
    </FieldWrapper>
    <ErrorMessage name={name} component={Error} />
  </FormInputWrapper>
)

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FormInputWrapper = styled.div`
  margin-top: 1rem;
  &:first-child {
    margin-top: 0;
  }
`

const FieldWrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.colorGreyDark};
  display: flex;
`

const inputCss = css`
  min-height: 1.75rem;
  width: 100%;
  padding: .5rem;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${p => p.theme.colorSecondaryTransparent};
  }
`

const Input = ({field, ...props}) =>
  <InputStyled {...field} {...props} />

const TextArea = ({field, placeholder}) =>
  <TextAreaStyled {...field} placeholder={placeholder} />

const InputStyled = styled.input`
  ${inputCss}
`

const TextAreaStyled = styled.textarea`
  ${inputCss}
  resize: vertical;
`

const Error = styled.p`
  color: ${p => p.theme.colorPrimary};
  margin: 0;
`
