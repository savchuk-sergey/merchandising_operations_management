import React from 'react'
import Button from 'react-materialize/lib/Button'
import { useDispatch, useSelector } from 'react-redux'
import postData from '../../../logic/utils/postData'
import {
  postOrder,
  setOrder,
} from '../../../redux/reducers/OrdersReducer'
import UploadCSV from '../../utils/UploadCSV'

const CreateOrder = () => {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.orders.order)

  const submitHandler = (e) => {
    e.preventDefault()
    postData(
      'http://localhost:3000/post_order',
      order
    ).then((r) => {
      M.toast({ html: r.message })
      dispatch(postOrder())
    })
  }

  const changeHandler = (e) => {
    let obj = order
    obj[e.target.id] = e.target.value

    dispatch(
      setOrder({
        ...order,
        ...obj,
      })
    )
  }

  return (
    <div className='container center'>
      <h4>Create Order</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor='supplier_id'>supplier_id</label>
          <input
            type='text'
            name='supplier_id'
            id='supplier_id'
            value={order.supplier_id}
            onChange={changeHandler}
            required
          />

          <label htmlFor='wh_id'>wh_id</label>
          <input
            type='text'
            name='wh_id'
            id='wh_id'
            value={order.wh_id}
            onChange={changeHandler}
            required
          />

          <label htmlFor='pack'>Pack</label>
          <input
            type='number'
            name='pack'
            id='pack'
            value={order.pack}
            onChange={changeHandler}
            required
          />

          <label htmlFor='qty'>Qty</label>
          <input
            type='number'
            name='qty'
            id='qty'
            value={order.qty}
            onChange={changeHandler}
            required
          />
        </div>

        <UploadCSV />

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default CreateOrder
