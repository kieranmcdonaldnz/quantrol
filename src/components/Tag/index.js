import styled from 'styled-components'
import colors from '../../constants/colors'

const Tag = styled.div`
  display: inline-block;
  color: #fff;
  text-align: center;
  min-width: 80px;
  font-size: 11px;
  border-radius: 4px;
  padding: 2px 12px 2px 12px;
  text-transform: uppercase;
  font-weight: 100;
  background: ${colors.highlight};
`

export default Tag
