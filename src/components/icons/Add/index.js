import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../../constants/colors'

const defaultSize = 20

const line = css`
  content: '';
  position: absolute;
  display: block;
  width: ${({ size = defaultSize }) => `${Math.floor(size / 7)}px`};
  height: ${({ size = defaultSize }) => `${size}px`};
  background: ${({ color = '#fff' }) => color};
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: ${({ size = 20 }) => `calc(50% - ${size / 2}px)`};
`

const AddIconWrapper = styled.div`
  position: relative;
  display: block;
  width: ${({ size = 20 }) => `${size}px`};
  height: ${({ size = 20 }) => `${size}px`};
  background: ${colors.primary};
  border-radius: 50%;
  flex-shrink: 1;
`

const Cross = styled.div`
  &:after {
    ${line}
    transform:rotate(90deg)
  }
  &:before {
    ${line}
  }
`

const AddIcon = ({ size = 36 }) => {
  return (
    <AddIconWrapper size={size}>
      <Cross size={size * 0.4} />
    </AddIconWrapper>
  )
}

export default AddIcon
