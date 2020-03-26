import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import logo from '../../assets/logo.svg'

const HeaderWrapper = styled.div`
  background: #fff;
  height: 90px;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  padding: 6px 24px 6px 24px;
  align-items: center;
`

function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Q-Ctrl logo" />
    </HeaderWrapper>
  )
}

export default Header
