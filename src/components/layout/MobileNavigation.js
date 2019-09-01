import React from 'react'
import { Link } from 'gatsby'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../../img/logo.svg'
import times from '../../img/times.svg'

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
        <CloseWrapper>
          <CloseIcon src={times} onClick={toggleMenu} />
        </CloseWrapper>
      </Wrapper>
      )}
    </ReactCSSTransitionGroup>
  </>
)

const cssTransitionProps = {
  className: "hero-animated-list",
  transitionName: "example",
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 300
}


const GlobalStyle = createGlobalStyle`
  .hero-animated-list {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
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
  width: 85%;
  height: 100%;
  background-color: ${p => p.theme.colorPrimary};
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  border-right: 1px solid white;
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

const CloseIcon = styled.img`
  height: 3rem;
`

const CloseWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${p => p.theme.colorPrimary};
  width: calc(15% + 1px);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colorSecondaryTransparent};
  z-index: 2;
`
