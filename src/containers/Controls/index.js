import React from 'react'
import styled from 'styled-components'

import Table from '../../components/Table'
import Heading from '../../components/Heading'
import ErrorModal from '../../components/ErrorModal'
import AddIcon from '../../components/icons/Add'
import Chevron from '../../components/icons/Chevron'
import Tag from '../../components/Tag'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

import { getControls } from '../../services/controls'

const TableHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  > h1 {
    margin-right: 24px;
  }
`

const TableAction = styled.div`
  padding-right: 16px;
  text-align: right;
`

function Controls() {
  let [controlsList = [], isLoading, hasError, requestControls] = useFetch(
    getControls
  )

  const controlListData = controlsList.map(
    ({ attributes: { type, ...attributes }, id }) => ({
      ...attributes,
      id,
      type: <Tag>{type}</Tag>,
      action: (
        <TableAction>
          <Chevron />
        </TableAction>
      )
    })
  )

  if (hasError) {
    return (
      <ErrorModal
        isOpen
        message={
          <span>
            Unable to
            <br /> Load Controls
          </span>
        }
        retry={requestControls}
      />
    )
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <TableHeading>
        <Heading.h1>Controls</Heading.h1>
        <AddIcon />
      </TableHeading>
      <Table
        columns={[
          {
            id: 'name',
            label: 'Title'
          },
          {
            id: 'type',
            label: 'Type'
          },
          {
            id: 'polar_angle',
            label: 'Polar Angle'
          },
          {
            id: 'maximum_rabi_rate',
            label: 'Max Rabi Rate'
          },
          {
            id: 'action'
          }
        ]}
        rows={controlListData}
      />
    </div>
  )
}

export default Controls
