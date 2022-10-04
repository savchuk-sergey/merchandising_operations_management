import React from 'react'
import Button from "react-materialize/lib/Button";
import UploadCSV from "../../utils/UploadCSV";
import {useDispatch, useSelector} from "react-redux";
import postData from "../../../logic/utils/postData";
import {postWh} from "../../../redux/reducers/whsReducer";
import {setWh} from "../../../redux/reducers/whsReducer";

const CreateWh = () => {
  const dispatch = useDispatch()
  const wh = useSelector(state => state.whs.wh)

  const submitHandler = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/post_wh', wh)
      .then(r => {
        M.toast({html: r.message})
        dispatch(postWh())
      }).catch(e => M.toast({html: e.message}))
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(setWh({...wh, ...obj}))
  }

  return (
    <div className="container center">
      <h4>Create Warehouse</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor="wh_name">Warehouse Name</label>
          <input type="text" name="wh_name" id="wh_name" value={wh.wh_name} onChange={changeHandler} required/>

          <label htmlFor="wh_manager">Warehouse Manager</label>
          <input type="text" name="wh_manager" id="wh_manager" value={wh.wh_manager} onChange={changeHandler}
                 required/>

          <label htmlFor="wh_address">Warehouse Address</label>
          <input type="text" name="wh_address" id="wh_address" value={wh.wh_address} onChange={changeHandler}
                 required/>

          </div>

        <UploadCSV/>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
export default CreateWh;
