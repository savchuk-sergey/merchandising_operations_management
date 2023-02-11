import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStores } from '../../redux/reducers/storesReducer'
import getStores from '../../logic/getStores.logic'
import formatDateTime from '../utils/formatDateTime'
import { CSVLink } from 'react-csv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Stores = (props) => {
  const dispatch = useDispatch()
  const stores = useSelector((state) => state.stores.stores)

  useEffect(() => {
    getStores().then((r) => {
      dispatch(setStores(r))
    })
  }, [])

  const clickHandler = (e) => 'e'

  return (
    <>
      <h4 className='center'>Stores</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>store</th>
              <th className='tg-0lax'>store_name</th>
              <th className='tg-0lax'>store_manager</th>
              <th className='tg-0lax'>phone_number</th>
              <th className='tg-0lax'>store_type</th>
              <th className='tg-0lax'>default_wh</th>
              <th className='tg-0lax'>open_date</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='store' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='store_name' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='store_manager' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='phone_number' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='store_type' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='default_wh' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='open_date' type='date' />
              </th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{store.store}</td>
                <td className='tg-0lax'>
                  {store.store_name}
                </td>
                <td className='tg-0lax'>
                  {store.store_manager}
                </td>
                <td className='tg-0lax'>
                  {store.phone_number}
                </td>
                <td className='tg-0lax'>
                  {store.store_type}
                </td>
                <td className='tg-0lax'>
                  {store.default_wh}
                </td>
                <td className='tg-0lax'>
                  {formatDateTime(store.open_date)}
                </td>
                <td
                  className='tg-0lax'
                  onClick={clickHandler}
                  id={store.store}
                >
                  <FontAwesomeIcon
                    id={store.store}
                    className='trash'
                    icon={faTrash}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />

      <div className='center'>
        <CSVLink
          className='btn center'
          data={stores}
          filename={`stores_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Stores
