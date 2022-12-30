import React from 'react'
import Button from 'react-materialize/lib/Button'
import UploadCSV from '../../utils/UploadCSV'
import postData from '../../../logic/utils/postData'
import { useDispatch, useSelector } from 'react-redux'
import {
  postPack,
  setPack,
} from '../../../redux/reducers/PacksReducer'

const CreatePack = () => {
  const dispatch = useDispatch()
  const pack = useSelector((state) => state.packs.pack)

  const submitHandler = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/post_pack', pack)
      .then((r) => {
        M.toast({ html: r.message })
        dispatch(postPack())
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(setPack({ ...pack, ...obj }))
  }

  return (
    <div className='container center'>
      <h4>Create Pack</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container '>
          <label htmlFor='item'>Pack No</label>
          <input
            type='text'
            name='item'
            id='pack'
            value={pack.pack}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='item_type'>Supplier ID</label>
          <input
            type='text'
            name='itemType'
            id='supplier_id'
            value={pack.supplier_id}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='description'>Pack Quantity</label>
          <input
            type='text'
            name='description'
            id='pack_qty'
            value={pack.pack_qty}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='start_retail'>Item No</label>
          <input
            type='number'
            name='startRetail'
            id='item_id'
            value={pack.item_id}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='uom'>Description</label>
          <input
            type='text'
            name='uom'
            id='description'
            value={pack.description}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='uom'>Cost</label>
          <input
            type='text'
            name='uom'
            id='cost'
            value={pack.cost}
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
export default CreatePack
