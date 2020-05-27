import React from 'react'
import { Link } from 'gatsby'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../../img/logo.svg'

export default ({ menu, navigation, toggleMenu }) => (
  <>
    <GlobalStyle/>
    <ReactCSSTransitionGroup {...cssTransitionProps}>
      {menu && (
      <Wrapper key={0} onClick={toggleMenu}>
        <Menu>
          {navigation.map(nav => (
            <NavItem key={nav.to} {...nav}>{nav.title}</NavItem>
          ))}
          <LogoWrapper to="/" title="Logo">
            <LogoIcon src={logo} alt="Vaime Travel" />
          </LogoWrapper>
        </Menu>
      </Wrapper>
      )}
    </ReactCSSTransitionGroup>
  </>
)

const cssTransitionProps = {
  className: "mobile-navigation",
  transitionName: "mobile-navigation-animation",
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 300
}


const GlobalStyle = createGlobalStyle`
  .mobile-navigation {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-out-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1000px);
    }
  }
  

  .mobile-navigation-animation-enter {}
  .mobile-navigation-animation-leave {}

  .mobile-navigation-animation-enter.mobile-navigation-animation-enter-active {
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }


  .mobile-navigation-animation-leave.mobile-navigation-animation-leave-active {
    animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }
`

const NavItem = styled(Link)`
  color: ${p => p.theme.colorWhite};
  text-decoration: none;
  text-transform: uppercase;
  padding: .5rem;
  border-bottom: 1px solid white;
  line-height: 2.3;
`

const Menu = styled.div`
  width: 65%;
  height: 100%;
  background-color: ${p => p.theme.colorPrimary};
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  border-right: 1px solid white;
  box-shadow: ${p => p.theme.shadowDark};
`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`

const LogoIcon = styled.img`
  width: 50%;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`
