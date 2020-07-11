import React from 'react'
import styled from 'styled-components'
import Heart from '../../icons/heart'
import HeartFilled from '../../icons/heart_filled'
import { useGetSeen } from '../../hooks/useSeen'
import { colorPrimary } from '../../components/style/Theme'

export default ({ slug }) => {
  const isSeen = useGetSeen(slug)
  const Icon = isSeen ? HeartFilled : Heart

  return (
    <HeartWrapper><Icon color={isSeen ? colorPrimary : 'black'} /></HeartWrapper>
  )
}

const HeartWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
`
