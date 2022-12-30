import React, { useEffect } from 'react'
import getItems, {
  searchItems,
} from '../../logic/getItems.logic'
import { useDispatch, useSelector } from 'react-redux'
import {
  setItem,
  setItems,
} from '../../redux/reducers/itemsReducer'
import formatDateTime from '../utils/formatDateTime'
import { CSVLink } from 'react-csv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import postData from '../../logic/utils/postData'
import getData from '../../logic/utils/getData'
import { setPacks } from '../../redux/reducers/PacksReducer'

const Items = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.items)
  const item = useSelector((state) => state.items.item)

  useEffect(() => {

    getData('http://localhost:3000/get_items')
      .then((r) => {
        dispatch(setItems(r))
      })
      .catch((e) => console.log(e))
    // searchItems().then((r) => {
    //   debugger
    //   dispatch(setItems(r))
    // })
  }, [])

  const changeHandler = (e) => {
    let obj = item

    obj[e.target.name] = e.target.value
    dispatch(setItem({ ...item, ...obj }))
    searchItems(item)
      .then((r) => {
        dispatch(setItems(r))
      })
      .catch((e) => console.log(e.message))
  }

  const clickHandler = (e) => {
    const item_id = e.currentTarget.id
    console.log(item_id)
    postData('http://localhost:3000/remove_item', {
      item_id,
    }).then((r) => {
      M.toast({ html: r.message })
      searchItems().then((r) => {
        dispatch(setItems(r))
      })
    })
    // .catch(e =>
    //   console.log(e.message)
    //   M.toast({html: e.message})
    // )
  }

  return (
    <>
      <h4 className='center'>Items</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>Item</th>
              <th className='tg-0lax'>item_type</th>
              <th className='tg-0lax'>description</th>
              <th className='tg-0lax'>start_retail</th>
              <th className='tg-0lax'>uom</th>
              <th className='tg-0lax'>created_at</th>
              <th className='tg-0lax'>created_by</th>
              <th className='tg-0lax'>updated_at</th>
              <th className='tg-0lax'>updated_by</th>
              <th className='tg-0lax'>selling_currency</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input
                  name='item'
                  type='text'
                  onChange={changeHandler}
                  value={item.item}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='item_type'
                  type='text'
                  value={item.item_type}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='description'
                  type='text'
                  value={item.description}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='start_retail'
                  type='number'
                  value={item.start_retail}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='uom'
                  type='text'
                  value={item.uom}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='created_at'
                  type='date'
                  value={item.created_at}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='created_by'
                  type='text'
                  value={item.created_by}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='updated_at'
                  type='date'
                  value={item.updated_at}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='updated_by'
                  type='text'
                  value={item.updated_by}
                  onChange={changeHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='selling_currency'
                  type='text'
                  value={item.selling_currency}
                  onChange={changeHandler}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{item.item}</td>
                <td className='tg-0lax'>
                  {item.item_type}
                </td>
                <td className='tg-0lax'>
                  {item.description}
                </td>
                <td className='tg-0lax'>
                  {item.start_retail}
                </td>
                <td className='tg-0lax'>{item.uom}</td>
                <td className='tg-0lax'>
                  {formatDateTime(item.created_at)}
                </td>
                <td className='tg-0lax'>
                  {item.created_by}
                </td>
                <td className='tg-0lax'>
                  {formatDateTime(item.updated_at)}
                </td>
                <td className='tg-0lax'>
                  {item.updated_by}
                </td>
                <td className='tg-0lax'>
                  {item.selling_currency}
                </td>
                <td
                  className='tg-0lax'
                  onClick={clickHandler}
                  id={item.item}
                >
                  <FontAwesomeIcon
                    id={item.item}
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
          data={items}
          filename={`Items_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Items
