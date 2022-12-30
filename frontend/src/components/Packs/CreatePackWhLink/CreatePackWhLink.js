import React from 'react'
import Button from 'react-materialize/lib/Button'
import UploadCSV from '../../utils/UploadCSV'
import postData from '../../../logic/utils/postData'
import { useDispatch, useSelector } from 'react-redux'
import {
  postPackWh,
  setPackWh,
} from '../../../redux/reducers/PackWhsReducer'

const CreatePackWhLink = () => {
  const dispatch = useDispatch()
  const packWh = useSelector(
    (state) => state.packWhs.packWh
  )

  const submitHandler = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/post_pack_wh', packWh)
      .then((r) => {
        M.toast({ html: r.message })
        dispatch(postPackWh())
      })
      .catch((e) => {
        M.toast({ html: e.message })
      })
  }

  const changeHandler = (e) => {
    console.log(packWh)
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(setPackWh({ ...packWh, ...obj }))
  }

  return (
    <div className='container center'>
      <h4>Create Pack Warehouse Link</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor='pack_no'>Pack No</label>
          <input
            type='text'
            name='pack'
            id='pack'
            value={packWh.pack}
            onChange={changeHandler}
            required
          />
          <br />

          <label htmlFor='wh'>Wh</label>
          <input
            type='text'
            name='wh'
            id='wh'
            value={packWh.wh}
            onChange={changeHandler}
            required
          />
          <br />
        </div>

        <UploadCSV />

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
export default CreatePackWhLink
