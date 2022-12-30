import React from 'react'
import Button from 'react-materialize/lib/Button'
import { useDispatch, useSelector } from 'react-redux'
import postData from '../../../logic/utils/postData'
import UploadCSV from '../../utils/UploadCSV'
import {
  postShipment,
  setShipment,
} from '../../../redux/reducers/shipmentsReducer'

const CreateShipment = () => {
  const dispatch = useDispatch()
  const shipment = useSelector(
    (state) => state.shipments.shipment
  )

  const submitHandler = (e) => {
    e.preventDefault()
    postData(
      'http://localhost:3000/post_shipment',
      shipment
    ).then((r) => {
      M.toast({ html: r.message })
      dispatch(postShipment())
    })
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(
      setShipment({
        ...shipment,
        ...obj,
      })
    )
  }

  return (
    <div className='container center'>
      <h4>Create Shipment</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor='wh_id'>wh_id</label>
          <input
            type='text'
            name='from'
            id='from'
            value={shipment.from}
            onChange={changeHandler}
            required
          />

          <label htmlFor='supplier_id'>store_id</label>
          <input
            type='text'
            name='to'
            id='to'
            value={shipment.to}
            onChange={changeHandler}
            required
          />

          <label htmlFor='pack'>Pack</label>
          <input
            type='number'
            name='pack'
            id='pack'
            value={shipment.pack}
            onChange={changeHandler}
            required
          />

          <label htmlFor='qty'>Qty</label>
          <input
            type='number'
            name='qty'
            id='qty'
            value={shipment.qty}
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

export default CreateShipment
