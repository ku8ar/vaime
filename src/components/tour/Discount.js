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
      <Triangle />
      <DiscountContent>
        <DiscountText>{`${discountTitle || ''} -${discount}%`}</DiscountText>
        <DiscountCircle>
          <Megaphone size="1.5rem" fill={'#fff'} />
        </DiscountCircle>
      </DiscountContent>
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
  text-transform: uppercase;
  text-align: end;
  margin-bottom: .5rem;
  font-size: 14px;
`

const DiscountWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 3rem;
  display: flex;
  border-radius: .5rem;
  ${p => p.theme.print` display: none; `}
`

const DiscountContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const triangleSize = '9rem'

const Triangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0; 
  height: 0; 
  top: -4rem;
  right: -7rem;
  border-left: ${triangleSize} solid transparent;
  border-right: ${triangleSize} solid transparent;
  border-top: ${triangleSize} solid ${p => p.theme.colorYellow};
  transform: rotate(-135deg);
`