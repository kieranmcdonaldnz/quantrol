import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: ${({ wide }) => (wide ? '100%' : '1180px')};
  margin: 0px auto;
  padding: 26px 16px;
`

function Content({ children, wide = false, className }) {
  return (
    <ContentWrapper wide={wide} className={className}>
      {children}
    </ContentWrapper>
  )
}

export default Content
