import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../constants/colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`

const Spinner = styled.div`
  position: absolute;
  animation: ${rotate} 2s linear infinite;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  background: ${({ color }) => color};
  animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
  ${({ radius }) => radius && `border-radius: ${radius}px`}
`

const Loader = () => (
  <LoaderWrapper>
    <Spinner size={50} color={colors.primary} radius={15} />
    <Spinner size={37} color={'#9468ff'} reverse radius={10} />
    <Spinner size={20} color={'#fff'} radius={3} />
  </LoaderWrapper>
)

export default Loader
