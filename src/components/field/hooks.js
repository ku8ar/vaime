import { useContext } from 'react'
import { FormContext } from './Form'

export const useField = field => {
  const { values, setValues } = useContext(FormContext)
  const value = values[field]
  const setValue = value => setValues(({...values, [field]: value}))
  const setInputValue = e => setValues(({...values, [field]: e.target.value}))

  return [value, setInputValue, setValue]
}
