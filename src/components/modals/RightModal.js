import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled, { createGlobalStyle } from 'styled-components'
import cross from '../../img/cross-dark.svg'
import { H4 } from '../Base'

export default ({ open, title, onClose, children }) => (
  <>
    <GlobalStyle />
    <TransitionWrapper>
      {open && (
        <CSSTransition {...cssTransitionProps}>
          <ModalWrapper>
            <CloseWrapper onClick={onClose}>
              <CloseIcon src={cross} />
            </CloseWrapper>
            <ContentWrapper>
              <Title>{title}</Title>
              {children}
            </ContentWrapper>
          </ModalWrapper>
        </CSSTransition>
      )}
    </TransitionWrapper>
  </>
)

const ModalWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 30rem;
  max-width: 80%;
  z-index: 3;
  background-color: ${p => p.theme.colorGrey};
  border-left: 1px solid ${p => p.theme.colorPrimary};
  display: flex;
  overflow-y: auto;
  box-shadow: ${p => p.theme.shadowDark};
  ${p => p.theme.mobile`
    max-width: 100%;
    width: 100%;
  `}
  bottom: 0;
  height: auto;
`

const ContentWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0;
  ${p => p.theme.mobile`
    
  `}
`

const CloseIcon = styled.img`
  height: 2rem;
`

const CloseWrapper = styled.div`
  position: fixed;
  right: 0;
  background-color: ${p => p.theme.colorGrey};
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Title = styled(H4)`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: 1rem;
`

const TransitionWrapper = styled(TransitionGroup)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`

const cssTransitionProps = {
  classNames: "right-modal-animation",
  timeout: { enter: 500, exit: 300 }
}

const GlobalStyle = createGlobalStyle`
  @keyframes slide-in-blurred-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-out-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1000px);
      opacity: 0;
    }
  }

  .right-modal-animation-enter {}
  .right-modal-animation-exit {}

  .right-modal-animation-enter.right-modal-animation-enter-active {
    animation: slide-in-blurred-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }


  .right-modal-animation-exit.right-modal-animation-exit-active {
    animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }
`
