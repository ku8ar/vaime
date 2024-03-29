import React, { memo } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colorPrimary } from '../../components/style/Theme'
import MenuIcon from '../../icons/menu'

export default ({ menu, navigation, slug }) => {
  const path = slug

  return (
    <Wrapper>
        <NavItem to="/" title="Logo">
          <Icon icon={'home'} fill={!path || path === '/' ? colorPrimary : 'white'} />
          Vaime
        </NavItem>
        {navigation.filter(nav => nav.mobile).map(nav => <Item key={nav.to} nav={nav} active={path === nav.to} />)}
    </Wrapper>
  )
}

const Item = memo(({nav, active }) => (
  <NavItem to={nav.to}>
    <Icon icon={nav.icon} fill={active ? colorPrimary : 'white'} />
    {nav.title}
  </NavItem>
))

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4.5rem;
  z-index: 2;
  background-color: rgba(27, 34, 44, 0.85);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: stretch;
  border-top: 1px solid white;
  backdrop-filter: blur(6px);
  overflow: hidden;

  display: none;
  ${p => p.theme.mobile`
    display: flex;
  `}
  ${p => p.theme.print` display: none; `}
`

const NavItem = styled(Link)`
  font-size: 11px;
  color: ${p => p.theme.colorWhite};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
`

const Icon = styled(MenuIcon)`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-bottom: .25rem;
`

