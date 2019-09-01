import React from 'react'
import styled from 'styled-components'
import {H4, H6, P} from '../Base'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled(Column)`
  margin-top: ${p => p.theme.marginS};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const DayColumn = styled(Column)`
  margin-top: ${p => p.theme.marginXxs};
`

const DayCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colorWhite};
  background-color: ${p => p.theme.colorPrimary};
  margin: 0 ${p => p.theme.marginS} 0 ${p => p.theme.marginXs};
  width: 2rem;
  height: 2rem;
  font-weight: ${p => p.theme.weightBold};
  border-radius: 50%;
`

const Place = styled(H4)`
  margin-top: 0;
  margin-bottom: 0;
`

const Text = styled(P)`
  margin-top: 0;
`

export default ({schedule = []}) => schedule && schedule.length && (
  <Wrapper>
    <H6>Dzień</H6>
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
