import React from 'react'
import styled from 'styled-components'
import {H6, P} from '../Base'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled(Column)`
  margin-top: 2rem;

  position: relative;
  &:before {
    position: absolute;
    border: 1px solid ${p => p.theme.colorPrimary};
    width: 0;
    height: calc(100% - 4rem);
    display: block;
    content: '';
    left: calc(1.5rem - 1px);
    top: 1rem;
    margin-left: 0;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const DayColumn = styled(Column)`
  margin-top: ${p => p.theme.marginXxs};
`

const DayCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colorPrimary};
  background-color: ${p => p.theme.colorWhite};
  margin: 0 ${p => p.theme.marginS} 0 ${p => p.theme.marginXs};
  border: 2px solid ${p => p.theme.colorPrimary};
  width: 2rem;
  height: 2rem;
  font-size: 13px;
  font-weight: ${p => p.theme.weightBold};
  border-radius: 50%;
  z-index: 1;
`

const Place = styled(H6)`
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: .5rem;
`

const Text = styled(P)`
  margin-top: 0;
  text-align: justify;
`

export default ({schedule = []}) => schedule && schedule.length && (
  <Wrapper>
    <Column>
      {schedule.map(s => (
        <Row key={s.day}>
          <DayColumn>
            <DayCircle>{s.day}</DayCircle>
          </DayColumn>
          <Column>
            <Place>{s.place}</Place>
            <Text>{s.text}</Text>
          </Column>
        </Row>
      ))}
    </Column>
  </Wrapper>
)
