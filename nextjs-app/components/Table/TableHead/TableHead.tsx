import React, { FC } from 'react'

type header = {
  text: string,
  type: 'date' | 'text' | 'number'
}


interface TableHeadProps {
  headers: Array<header>
}

const TableHead:FC<TableHeadProps> = ({headers, }) => {
  return (
    <thead>
    <tr style={{ border: '0px' }}>
      {headers.map(h => (
        <th className='tg-0lax'>{h.text}</th>
      ))}
    </tr>
    <tr>
      {headers.map(h => (
        <th className='tg-0lax'>
          <input name={h.text} type={h.type} />
        </th>
      ))} </tr>
    </thead>
  )
}