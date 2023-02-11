import React, { FC } from 'react'
import { order } from '../../../utils/types'

type data = {
  text: string,
  type: 'date' | 'text' | 'number'
}


interface TableHeadProps {
  data: Array<order | supplier | shipment | >,
  isDeletable: boolean
}

const TableHead:FC<TableHeadProps> = ({orders, isDeletable}) => {
  return (
    <tbody>
    {orders.map((order, i) => (
      <tr key={i}>
        <td className='tg-0lax'>{order.id}</td>
        <td className='tg-0lax'>
          {order.supplier_id}
        </td>
        <td className='tg-0lax'>{order.wh_id}</td>
        <td className='tg-0lax'>{order.status}</td>
        <td className='tg-0lax'>
          {formatDateTime(order.order_date)}
        </td>
        <td className='tg-0lax'>
          {order.receive_date
            ? formatDateTime(order.receive_date)
            : 'not received'}
        </td>
        <td className='tg-0lax'>{order.pack}</td>
        <td className='tg-0lax'>{order.qty}</td>
        {order.status != 'Received' ? (
          <td
            className='tg-0lax'
            onClick={clickHandler}
            id={order.id}
          >
            <FontAwesomeIcon
              className='check'
              icon={faCheck}
            />
          </td>
        ) : (
          ''
        )}
      </tr>
    ))}
    </tbody>
  )
}