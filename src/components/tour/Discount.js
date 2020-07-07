import React from 'react'
import styled from 'styled-components'
import { P } from '../Base'
import { hasTourDiscount } from '../../utils/selectors'
import Megaphone from '../../icons/base/megaphone'

export default ({ className, tour }) => {
  const { discount, discountTitle} = tour
  const hasDiscount = hasTourDiscount(tour)

  return hasDiscount ? (
    <DiscountWrapper className={className}>
      <DiscountCircle>
        <Megaphone size="1.5rem" fill={'#fff'} />
      </DiscountCircle>
      <DiscountText>{`${discountTitle || ''} -${discount}%`}</DiscountText>
    </DiscountWrapper>
  ) : null
}

const DiscountCircle = styled.div`
  background-color: ${p => p.theme.colorPrimary};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before{
   content: '';
   position: absolute;
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
   border: 1px solid white;
}
`

const DiscountText = styled(P)`
  color: ${p => p.theme.colorSecondary};
  margin: 0;
  max-width: 8rem;
  margin-left: 1rem;
  text-transform: uppercase;
`

const DiscountWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 3rem;
  display: flex;
  align-items: center;
  border-radius: .5rem;
  background-color: ${p => p.theme.colorYellow};
  padding: .5rem .5rem;
  box-shadow: 5px 5px 0px 0px ${p => p.theme.colorOrange};
  border: 1px solid ${p => p.theme.colorSecondaryTransparent};
`