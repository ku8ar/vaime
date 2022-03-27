import React, { useState, useCallback, memo, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import useDict from 'src/hooks/dict'
import { H5, P, buttonStyle } from '../Base'

export default ({ popupTitle, popupText, popupLink, slug }) => {
  // const id = `popup_${popupTitle}`

  const [visited, setVisited] = useState(false)

  const onClick = useCallback(() => {
    setVisited(true)
    // localStorage && localStorage.setItem(id, true)
  }, [])

  useEffect(() => {
    if (!visited) {
      if ((slug || '').includes(popupLink)) {
        onClick()
      }
    }
  }, [slug])

  // useEffect(() => {
  //   setVisited(localStorage && localStorage.getItem(id))
  // }, [])

  if (visited) return null

  return <PopupComponent onClick={onClick} popupTitle={popupTitle} popupText={popupText} popupLink={popupLink} />
}

const PopupComponent = memo(({ onClick, popupTitle, popupText, popupLink }) => {
  const moreText = useDict("more")

  return (
    <Wrapper>
      <CloseButton onClick={onClick}>x</CloseButton>
      <Title>{popupTitle}</Title>
      <Text>{popupText}</Text>
      <ButtonWrapper>
      {popupLink ? <Button to={popupLink}>{moreText}</Button> : null}
      </ButtonWrapper>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  padding: .5rem 1rem 0.5rem 1rem;
  top: calc(4rem + 2rem);
  right: 2rem;
  background-color: ${p => p.theme.colorGreyLight};
  border-radius: ${p => p.theme.radiusSmall};
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
  width: 25rem;
  display: flex;
  flex-direction: column;
  ${p => p.theme.mobile`
    position: relative;
    margin: 0;
    margin-top: 4rem;
    margin-bottom: -4rem;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: none;
    border-radius: 0px;
  `}
  ${p => p.theme.print` display: none; `}
`
const Title = styled(H5)`
  margin-top: .5rem;
`
const Text = styled(P)`
  margin-bottom: .5rem;
`
const CloseButton = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  text-align: center;
  color: ${p => p.theme.colorWhite};
  background-color: ${p => p.theme.colorPrimary};
  cursor: pointer;
  ${p => p.theme.mobile`
    top: 0.5rem;
    right: 0.5rem;
  `}
`
const ButtonWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: .5rem;
  margin-bottom: .5rem;
`
const Button = styled(Link)`
  ${buttonStyle}
`
