import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import formatDateTime from '../utils/formatDateTime'
import { CSVLink } from 'react-csv'
import getOrders from '../../logic/getOrders.logic'
import { setOrders } from '../../redux/reducers/OrdersReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import postData from '../../logic/utils/postData'
import { searchItems } from '../../logic/getItems.logic'
import { setItems } from '../../redux/reducers/itemsReducer'

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders.orders)

  useEffect(() => {
    getOrders().then((r) => {
      dispatch(setOrders(r))
    })
  }, [])

  const clickHandler = (e) => {
    const order_id = e.currentTarget.id
    console.log(order_id)
    postData('http://localhost:3000/receive_order', {
      order_id,
    }).then((r) => {
      M.toast({ html: r.message })
      getOrders().then((r) => {
        dispatch(setOrders(r))
      })
    })
  }

  return (
    <>
      <h4 className='center'>Orders</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>Id</th>
              <th className='tg-0lax'>supplier_id</th>
              <th className='tg-0lax'>wh_id</th>
              <th className='tg-0lax'>status</th>
              <th className='tg-0lax'>order_date</th>
              <th className='tg-0lax'>receive_date</th>
              <th className='tg-0lax'>pack</th>
              <th className='tg-0lax'>qty</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='Id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='supplier_id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='wh_id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='status' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='order_date' type='date' />
              </th>
              <th className='tg-0lax'>
                <input name='receive_date' type='date' />
              </th>
              <th className='tg-0lax'>
                <input name='pack' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='qty' type='text' />
              </th>
            </tr>
          </thead>
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
        </table>
      </div>
      <br />
      <div className='center'>
        <CSVLink
          className='btn'
          data={orders}
          filename={`Orders_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Orders
