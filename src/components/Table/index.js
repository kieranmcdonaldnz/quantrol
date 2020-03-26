import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  thead tr {
    height: 50px;
    box-sizing: border-box;
  }

  tbody tr {
    min-height: 80px;
    td {
      font-size: 14px;
      &:nth-child(1) {
        font-size: 16px;
      }
    }
  }

  tbody {
    display: block;
    border-bottom: 1px solid ${colors.border};
    background: #fff;
  }

  tr {
    padding: 0px 16px;
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid ${colors.border};
  }

  th,
  td {
    text-align: left;
    flex-grow: 1;
    flex-basis: 0;
  }

  th {
    color: ${colors.lightGrey};
    text-transform: uppercase;
    font-size: 12px;
    padding: 0px;
  }

  td {
    color: ${colors.lightGrey};
  }
`

export const Table = ({ columns = [], rows = [] }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {columns.map(({ id, label }) => (
            <th key={id}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id: itemId, ...row }) => {
          return (
            <tr key={`row_${itemId}`}>
              {columns.map(({ id: columnId, align }) => (
                <td key={`row_${itemId}_cell_${columnId}`}>{row[columnId]}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </TableWrapper>
  )
}

export default Table
