import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Button } from './Base'
import useDict from 'src/hooks/dict'

const Cookies = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hasCookie = localStorage && localStorage.getItem("cookie")

    if (!hasCookie) {
      setShow(true)
    }
  }, [])

  const hideCookie = useCallback(() => {
     localStorage && localStorage.setItem("cookie", "true")
    setShow(false)
  }, [])

  const title = useDict('pageUseCookies')

  return show && (
    <Wrapper>
      <Text>{title}</Text>
      <Agree onClick={hideCookie}>OK</Agree>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colorPrimary};
  border-top: 1px solid white;
  padding: .5rem 1rem .5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${p => p.theme.mobile`
    height: 4rem;
    top: 0;
    bottom: inherit;
  `}
  ${p => p.theme.print`
    display: none;
  `}
`

const Agree = styled(Button)`
  background-color: white;
  color: ${props => props.theme.colorPrimary};
  margin: 0;
  margin-left: 1rem;
`

const Text = styled.p`
  color: white;
  margin: 0;
`

export default Cookies
