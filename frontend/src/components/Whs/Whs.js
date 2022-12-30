import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import getData from '../../logic/utils/getData'
import { setWhs } from '../../redux/reducers/whsReducer'

const Whs = (props) => {
  const dispatch = useDispatch()
  const whs = useSelector((state) => state.whs.whs)

  useEffect(() => {
    getData('http://localhost:3000/get_whs')
      .then((r) => {
        dispatch(setWhs(r))
        console.log(whs)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      <h4 className='center'>Warehouses</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>wh_id</th>
              <th className='tg-0lax'>wh_name</th>
              <th className='tg-0lax'>wh_manager</th>
              <th className='tg-0lax'>wh_address</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='wh_id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='wh_name' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='wh_manager' type='number' />
              </th>
              <th className='tg-0lax'>
                <input name='wh_address' type='number' />
              </th>
            </tr>
          </thead>
          <tbody>
            {whs.map((wh, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{wh.id}</td>
                <td className='tg-0lax'>{wh.wh_name}</td>
                <td className='tg-0lax'>{wh.wh_manager}</td>
                <td className='tg-0lax'>{wh.wh_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />

      <div className='center'>
        <CSVLink
          className='btn center'
          data={whs}
          filename={`whs_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Whs
