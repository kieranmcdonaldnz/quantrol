import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import colors from '../../constants/colors'
import Exit from '../icons/Exit'
import { ROOT_NODE } from '../../constants/global'
ReactModal.setAppElement(`#${ROOT_NODE}`)

const CloseButton = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`

// Modals are heaps inaccessiable, so using react-modal to save on missing requiremnts
function Modal({ children, isOpen, afterOpen, customStyles, label }) {
  const closeAction = () => window.alert("What's the close action?")
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpen}
      onRequestClose={closeAction}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display: 'relative',
          justifyContent: 'center',
          padding: 0,
          borderRadius: '0px',
          border: 'none'
        },
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(75, 15, 82, 0.30)'
        },
        ...customStyles
      }}
      contentLabel={label}
    >
      <CloseButton onClick={closeAction}>
        <Exit color={colors.grey} size={20} />
      </CloseButton>
      {children}
    </ReactModal>
  )
}

export default Modal
