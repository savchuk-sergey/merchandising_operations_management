import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  deleteItem,
  getItems,
} from '../../redux/reducers/itemsReducer'
import formatDateTime from '../utils/formatDateTime'
import { CSVLink } from 'react-csv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { compose } from 'redux'

const Items = (props) => {
  const items = props.items
  const item = props.item

  useEffect(() => {
    props.getItems()
  }, [])

  const searchInputHandler = (e) => {
    // let obj = item
    //
    // obj[e.target.name] = e.target.value
    //
    //
    // dispatch(setItem({ ...item, ...obj }))
    // searchItems(item)
    //   .then((r) => {
    //     dispatch(setItems(r))
    //   })
    //   .catch((e) => console.log(e.message))
  }

  const itemDeleteHandler = (e) => {
    const itemId = e.currentTarget.id

    props.deleteItem(itemId)
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
                  onChange={searchInputHandler}
                  value={item.item}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='item_type'
                  type='text'
                  value={item.item_type}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='description'
                  type='text'
                  value={item.description}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='start_retail'
                  type='number'
                  value={item.start_retail}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='uom'
                  type='text'
                  value={item.uom}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='created_at'
                  type='date'
                  value={item.created_at}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='created_by'
                  type='text'
                  value={item.created_by}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='updated_at'
                  type='date'
                  value={item.updated_at}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='updated_by'
                  type='text'
                  value={item.updated_by}
                  onChange={searchInputHandler}
                />
              </th>
              <th className='tg-0lax'>
                <input
                  name='selling_currency'
                  type='text'
                  value={item.selling_currency}
                  onChange={searchInputHandler}
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
                  onClick={itemDeleteHandler}
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

const mapStateToProps = (state) => ({
  items: state.items.items,
  item: state.items.item,
})

export default compose(
  connect(mapStateToProps, {
    getItems,
    deleteItem,
  })
)(Items)

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     currentPage: state.usersPage.currentPage,
//     totalCount: state.usersPage.totalCount,
//     pageSize: state.usersPage.pageSize,
//     isFetching: state.usersPage.isFetching,
//     isFollowFetching: state.usersPage.isFollowFetching,
//     isAuth: state.auth.isAuth,
//   }
// }
//
// export default compose(
//   connect(mapStateToProps, {
//     setCurrentPage,
//     setUsersThunkCreator,
//     followThunkCreator,
//     unFollowThunkCreator,
//   })
// )(UsersContainer)
