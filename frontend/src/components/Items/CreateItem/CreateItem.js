import React from 'react'
import Button from 'react-materialize/lib/Button'
import UploadCSV from '../../utils/UploadCSV'
import { connect } from 'react-redux'
import {
  createItem,
  setItem,
} from '../../../redux/reducers/itemsReducer'
import { compose } from 'redux'

const CreateItem = (props) => {
  const item = props.item

  const submitItemHandler = (e) => {
    e.preventDefault()
    props.createItem(item)
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    props.setItem({ ...item, ...obj })
  }

  return (
    <div className='container center'>
      <h4>Create Item</h4>
      <form onSubmit={submitItemHandler}>
        <div className='z-depth-3 custom-container '>
          <label htmlFor='item'>Item No</label>
          <input
            type='text'
            name='item'
            id='item'
            value={item.item}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='item_type'>Item Type</label>
          <input
            type='text'
            name='itemType'
            id='item_type'
            value={item.item_type}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={item.description}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='start_retail'>
            Start selling retail
          </label>
          <input
            type='number'
            name='startRetail'
            id='start_retail'
            value={item.start_retail}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='uom'>Unit of measure</label>
          <input
            type='text'
            name='uom'
            id='uom'
            value={item.uom}
            onChange={changeHandler}
            required
          />
          <br />
        </div>

        <UploadCSV />
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  item: state.items.item,
})

export default compose(
  connect(mapStateToProps, { setItem, createItem })
)(CreateItem)
