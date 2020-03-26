import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import Button from '../Button'
import colors from '../../constants/colors'

const ErrorWrapper = styled.div`
  color: #ae9fb4;
  text-transform: uppercase;
  display: flex;
  width: 482px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px 64px 64px 64px;
`
// Probably could be a shared element. Depends on the rest of the designs
const ErrorTextTitle = styled.p`
  font-size: 14px;
  letter-spacing: 4px;
`
const ErrorTextDescription = styled.p`
  color: ${colors.grey};
  font-size: 32px;
  letter-spacing: 4px;
  margin: 0px;
`

const ErrorHeading = styled.div`
  text-align: center;
  margin-bottom: 212px;
`

function ErrorModal({ message, retry, ...props }) {
  return (
    <Modal {...props}>
      <ErrorWrapper>
        <ErrorHeading>
          <ErrorTextTitle>Error</ErrorTextTitle>
          <ErrorTextDescription>{message}</ErrorTextDescription>
        </ErrorHeading>
        <Button onClick={retry}>Try again</Button>
      </ErrorWrapper>
    </Modal>
  )
}

export default ErrorModal
