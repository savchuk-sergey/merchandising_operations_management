import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPromotions from '../../logic/getPromotions'
import { setPromotions } from '../../redux/reducers/promotionReducer'
import formatDateTime from '../utils/formatDateTime'
import { CSVLink } from 'react-csv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Promotions = () => {
  const dispatch = useDispatch()
  const promotions = useSelector(
    (state) => state.promotions.promotions
  )

  useEffect(() => {
    getPromotions().then((r) => {
      dispatch(setPromotions(r))
    })
  }, [])

  const clickHandler = (e) => 'e'

  return (
    <>
      <h4 className='center'>Promotions</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>id</th>
              <th className='tg-0lax'>item</th>
              <th className='tg-0lax'>store</th>
              <th className='tg-0lax'>discount_type</th>
              <th className='tg-0lax'>discount_amount</th>
              <th className='tg-0lax'>start_date</th>
              <th className='tg-0lax'>end_date</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='id' id='id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='item' id='item' type='text' />
              </th>
              <th className='tg-0lax'>
                <input
                  name='store'
                  id='store'
                  type='text'
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='discount_type'
                  id='discount_type'
                  type='text'
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='discount_amount'
                  id='discount_amount'
                  type='text'
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='start_date'
                  id='start_date'
                  type='date'
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='end_date'
                  id='end_date'
                  type='date'
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{promotion.id}</td>
                <td className='tg-0lax'>
                  {promotion.item}
                </td>
                <td className='tg-0lax'>
                  {promotion.store}
                </td>
                <td className='tg-0lax'>
                  {promotion.discount_type}
                </td>
                <td className='tg-0lax'>
                  {promotion.discount_amount}
                </td>
                <td className='tg-0lax'>
                  {formatDateTime(promotion.start_date)}
                </td>
                <td className='tg-0lax'>
                  {formatDateTime(promotion.end_date)}
                </td>
                <td
                  className='tg-0lax'
                  onClick={clickHandler}
                  id={promotion.id}
                >
                  <FontAwesomeIcon
                    id={promotion.id}
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
          data={promotions}
          filename={`promotions_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Promotions
