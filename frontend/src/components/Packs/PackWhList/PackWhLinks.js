import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import getPackWhLinks from '../../../logic/getPackWhLinks.logic'
import { setPackWhs } from '../../../redux/reducers/PackWhsReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const PackWhLinks = () => {
  const dispatch = useDispatch()
  const packWhs = useSelector(
    (state) => state.packWhs.packWhs
  )

  useEffect(() => {
    getPackWhLinks().then((r) => {
      dispatch(setPackWhs(r))
    })
  }, [])

  const clickHandler = (e) => 'e'

  return (
    <>
      <h4 className='center'>Pack Warehouse Links</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>Pack</th>
              <th className='tg-0lax'>Warehouse</th>
              <th className='tg-0lax'>Quantity</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='Pack' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='Warehouse' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='Quantity' type='number' />
              </th>
            </tr>
          </thead>
          <tbody>
            {packWhs.map((packWh, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{packWh.pack}</td>
                <td className='tg-0lax'>{packWh.wh}</td>
                <td className='tg-0lax'>{packWh.qty}</td>
                <td
                  className='tg-0lax'
                  onClick={clickHandler}
                  id={packWh.pack}
                >
                  <FontAwesomeIcon
                    id={packWh.pack}
                    className='trash'
                    icon={faTrash}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
      <br />
      <div className='center'>
        <CSVLink
          className='btn'
          data={packWhs}
          filename={`PackWarehouseLinks_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default PackWhLinks
