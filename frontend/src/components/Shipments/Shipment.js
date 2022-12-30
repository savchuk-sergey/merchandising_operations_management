import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import { setShipments } from '../../redux/reducers/shipmentsReducer'
import getShipments from '../../logic/getShipments.logic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import postData from '../../logic/utils/postData'
import formatDateTime from '../utils/formatDateTime'

const Shipments = () => {
  const dispatch = useDispatch()
  const shipments = useSelector(
    (state) => state.shipments.shipments
  )

  useEffect(() => {
    getShipments().then((r) => {
      dispatch(setShipments(r))
    })
  }, [])

  const clickHandler = (e) => {
    const shipment_id = e.currentTarget.id
    console.log(shipment_id)
    postData('http://localhost:3000/receive_shipment', {
      shipment_id,
    }).then((r) => {
      M.toast({ html: r.message })
      getShipments().then((r) => {
        dispatch(setShipments(r))
      })
    })
  }

  return (
    <>
      <h4 className='center'>Shipments</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr>
              <th className='tg-0lax'>id</th>
              <th className='tg-0lax'>from</th>
              <th className='tg-0lax'>to</th>
              <th className='tg-0lax'>in_date</th>
              <th className='tg-0lax'>status</th>
              <th className='tg-0lax'>out_date</th>
              <th className='tg-0lax'>pack</th>
              <th className='tg-0lax'>qty</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='from' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='to' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='in_date' type='date' />
              </th>
              <th className='tg-0lax'>
                <input name='status' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='out_date' type='date' />
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
            {shipments.map((shipment, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{shipment.id}</td>
                <td className='tg-0lax'>{shipment.from}</td>
                <td className='tg-0lax'>{shipment.to}</td>
                <td className='tg-0lax'>
                  {shipment.in_date
                    ? formatDateTime(shipment.in_date)
                    : 'not received'}
                </td>
                <td className='tg-0lax'>
                  {shipment.status}
                </td>
                <td className='tg-0lax'>
                  {formatDateTime(shipment.out_date)}
                </td>
                <td className='tg-0lax'>{shipment.pack}</td>
                <td className='tg-0lax'>{shipment.qty}</td>
                {shipment.status != 'Received' ? (
                  <td
                    className='tg-0lax'
                    onClick={clickHandler}
                    id={shipment.id}
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
          data={shipments}
          filename={`Shipments${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Shipments
