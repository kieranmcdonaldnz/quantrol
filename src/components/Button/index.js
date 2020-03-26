import styled from 'styled-components'
import colors from '../../constants/colors'

const Button = styled.button`
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  text-align: center;
  background: ${colors.primary};
  color: #fff;
  border: 0px;
  border-radius: 3px;
  cursor: pointer;
`

export default Button
