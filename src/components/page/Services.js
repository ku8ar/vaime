import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Icon from '../../icons/services'
import { colorPrimary } from '../../components/style/Theme'
import { H5, P } from '../Base'

export default ({ services }) => {
  if (!services || !services.length ) return null

  return (
    <Wrapper>
      {services.map((props, index) => (
        <Service {...props} key={index} />
      ))}
    </Wrapper>
  )
}

const Service = ({icon, title, text}) => {
  const [visible, setVisible] = useState(false)
  const onClick = useCallback(() => setVisible(true), [])

  return (
    <Item >
      <Icon icon={icon} fill={colorPrimary} />
      <Column>
        <H5>{title}</H5>
        <Text visible={visible}>{text}</Text>
        {!visible && <More onClick={onClick}>Więcej</More>}
      </Column>
    </Item>
  )
}

const More = styled(P)`
  color: ${p => p.theme.colorPrimary};
  cursor: pointer;
`

const Text = styled(P)`
  display: ${p => p.visible ? 'flex' : '-webkit-box'};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-align: justify;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-left: 1rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  width: 50%;
  &:nth-child(odd) {
    padding-right: 1rem;
    ${p => p.theme.mobile `padding-right: 0`}
  }
  &:nth-child(even) {
    padding-left: 1rem;
    ${p => p.theme.mobile `padding-left: 0`}
  }
  ${p => p.theme.mobile`
    width: 100%;
  `}
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`