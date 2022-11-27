import React from 'react'

export default function TableRow(props) {
  return (
    <tr>
    <th scope="row">{props.id}</th>
    <td>{props?.exam?.exam?.name}</td>
    <td>
        {props?.exam.result?.isPassed ===true ? "Pass" : "Fail"}
    </td>
    <td>{props?.exam.result?.result}/{(props?.exam.result?.result)+(props?.exam.result?.lostPoints)}</td>
  </tr>
  )
}