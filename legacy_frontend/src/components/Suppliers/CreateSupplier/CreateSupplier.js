import React from 'react'
import Button from 'react-materialize/lib/Button'
import UploadCSV from '../../utils/UploadCSV'
import { useDispatch, useSelector } from 'react-redux'
import postData from '../../../logic/utils/postData'
import {
  postSupplier,
  setSupplier,
} from '../../../redux/reducers/suppliersReducer'

const CreateSupplier = () => {
  const dispatch = useDispatch()
  const supplier = useSelector(
    (state) => state.suppliers.supplier
  )

  const submitHandler = (e) => {
    e.preventDefault()
    postData(
      'http://localhost:3000/post_supplier',
      supplier
    )
      .then((r) => {
        M.toast({ html: r.message })
        dispatch(postSupplier())
      })
      .catch((e) => M.toast({ html: e.message }))
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(setSupplier({ ...supplier, ...obj }))
  }

  return (
    <div className='container center'>
      <h4>Create Supplier</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={supplier.name}
            onChange={changeHandler}
            required
          />

          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            value={supplier.address}
            onChange={changeHandler}
            required
          />

          <label htmlFor='phone_number'>Phone Number</label>
          <input
            type='text'
            name='phone_number'
            id='phone_number'
            value={supplier.phone_number}
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
export default CreateSupplier
