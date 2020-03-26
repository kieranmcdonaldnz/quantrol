import styled from 'styled-components'
import colors from '../../../constants/colors'

const defaultSize = 12
const Chevron = styled.span`
  display: inline-block;
  width: ${({ size = defaultSize }) => `${size}px`};
  height: ${({ size = defaultSize }) => `${size}px`};
  border-right: 3px solid ${colors.lightGrey};
  border-top: 3px solid ${colors.lightGrey};
  transform: rotate(45deg);
`
export default Chevron
