import React from 'react'
import styled from 'styled-components'
import Heart from '../../icons/heart'
import { useGetSeen } from '../../hooks/useSeen'
import { colorPrimary } from '../../components/style/Theme'

export default ({ slug }) => {
  const isSeen = useGetSeen(slug)

  return (
    <HeartWrapper><Heart color={isSeen ? colorPrimary : 'black'} /></HeartWrapper>
  )
}

const HeartWrapper = styled.div`
  width: 1rem;
`
