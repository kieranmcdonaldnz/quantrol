import styled, { css } from 'styled-components'

const defaultSize = 50
const line = css`
  content: '';
  position: absolute;
  display: block;
  width: ${({ size = defaultSize }) => `${Math.floor(size / 7)}px`};
  height: ${({ size = defaultSize }) => `${size}px`};
  background: ${({ color = 'black' }) => color};
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const Exit = styled.div`
  width: ${({ size = defaultSize }) => `${size}px`};
  height: ${({ size = defaultSize }) => `${size}px`};
  position: relative;
  &:after {
    ${line}
    transform: rotate(-45deg);
  }
  &:before {
    ${line}
    transform: rotate(45deg);
  }
`

export default Exit
