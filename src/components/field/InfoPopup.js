import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

export default ({ info }) => {
  const [visible, setVisible] = useState(false)
  const show = useCallback(() => setVisible(true), [])
  const hide = useCallback(() => setVisible(false), [])
  const swap =  useCallback(() => setVisible(!visible), [visible])

  if (!info) return null

  return (
    <Wrapper onClick={swap} onMouseEnter={show} onMouseLeave={hide}>
      <Info>i</Info>
      {visible && <Popup>{info}</Popup>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: .5rem;
  position: relative;
  flex: 1;
  flex-direction: row;
  cursor: default;
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colorWhite};
  background-color: ${p => p.theme.colorPrimary};
  width: .8rem;
  height: .8rem;
  font-size: 11px;
  border-radius: 50%;
  z-index: 1;
`

const Popup = styled.div`
  position: absolute;
  left: 1.5rem;
  top: -1rem;
  background-color: ${p => p.theme.colorWhite};
  border-radius: ${p => p.theme.radiusSmall};
  border: 1px solid ${p => p.theme.colorPrimary};
  padding: .25rem;
  font-size: 10px;
  width: 15rem;

  &:before {
    position: absolute;
    content: '';
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 5px solid ${p => p.theme.colorPrimary};
    left: -6px;
    top: 18px;
  }
`