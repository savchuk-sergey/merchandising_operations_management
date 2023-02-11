import React, { useEffect, useState } from 'react'
import Button from 'react-materialize/lib/Button'
import UploadCSV from '../utils/UploadCSV'
import { useDispatch, useSelector } from 'react-redux'
import { setPriceChange } from '../../redux/reducers/PriceChangeReducer'
import postData from '../../logic/utils/postData'

const ChangePrice = (props) => {
  const dispatch = useDispatch()
  const priceChange = useSelector(
    (state) => state.priceChange.priceChange
  )

  const submitHandler = (e) => {
    e.preventDefault()
    postData(
      'http://localhost:3000/post_price_change',
      priceChange
    )
      .then((r) => {
        console.log(r)
        M.toast({ html: r.message })
        dispatch(
          setPriceChange({
            item: '',
            store: '',
            change_amount: '',
          })
        )
      })
      .catch((e) => {
        console.log(e)
        M.toast({ html: e.message })
      })
  }

  const changeHandler = (e) => {
    console.log(priceChange)
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(setPriceChange({ ...priceChange, ...obj }))
  }

  return (
    <div className='container center'>
      <h4>Change Price</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor='item'>Item No</label>
          <input
            type='text'
            name='item'
            id='item'
            required
            value={priceChange.item}
            onChange={changeHandler}
          />
          <br />

          <label htmlFor='store'>Store No</label>
          <input
            type='number'
            name='store'
            id='store'
            required
            value={priceChange.store}
            onChange={changeHandler}
          />
          <br />

          <label htmlFor='discount_amount'>
            Change to price
          </label>
          <input
            type='number'
            name='changeAmount'
            id='change_amount'
            required
            value={priceChange.change_amount}
            onChange={changeHandler}
          />
          <br />
        </div>
        <br />
        <UploadCSV />

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
export default ChangePrice
