import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import getData from '../../logic/utils/getData'
import { setPacks } from '../../redux/reducers/PacksReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Packs = (props) => {
  const dispatch = useDispatch()
  const packs = useSelector((state) => state.packs.packs)

  useEffect(() => {
    getData('http://localhost:3000/get_packs')
      .then((r) => {
        dispatch(setPacks(r))
      })
      .catch((e) => console.log(e))
  }, [])

  const clickHandler = (e) => 'clickHandler'

  return (
    <>
      <h4 className='center'>Packs</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>Pack</th>
              <th className='tg-0lax'>Supplier id</th>
              <th className='tg-0lax'>Pack Quantity</th>
              <th className='tg-0lax'>Item id</th>
              <th className='tg-0lax'>Description</th>
              <th className='tg-0lax'>Cost</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='Pack' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='Supplier id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='Pack Quantity' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='Item id' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='Description' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='Cost' type='number' />
              </th>
            </tr>
          </thead>
          <tbody>
            {packs.map((pack, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{pack.pack}</td>
                <td className='tg-0lax'>
                  {pack.supplier_id}
                </td>
                <td className='tg-0lax'>{pack.pack_qty}</td>
                <td className='tg-0lax'>{pack.item_id}</td>
                <td className='tg-0lax'>
                  {pack.description}
                </td>
                <td className='tg-0lax'>{pack.cost}</td>
                <td
                  className='tg-0lax'
                  onClick={clickHandler}
                  id={pack.pack}
                >
                  <FontAwesomeIcon
                    id={pack.pack}
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
          className='btn'
          data={'her'}
          filename={`Packs_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Packs
