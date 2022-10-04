import React from 'react'
import Button from "react-materialize/lib/Button";
import UploadCSV from "../../utils/UploadCSV";
import {useDispatch, useSelector} from "react-redux";
import postData from "../../../logic/utils/postData";
import {postStore, setStore} from "../../../redux/reducers/storesReducer";

const CreateStore = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.stores.store)

  const submitHandler = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/post_store', store)
      .then(r => {
        M.toast({html: r.message})
        dispatch(postStore())
      })
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    dispatch(setStore({...store, ...obj}))
  }

  return (
    <div className="container center">
      <h4>Create Store</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor="store">Store No</label>
          <input type="number" name="store" id="store" value={store.store} onChange={changeHandler} required/>

          <label htmlFor="store_name">Store name</label>
          <input type="text" name="storeName" id="store_name" value={store.store_name} onChange={changeHandler}
                 required/>

          <label htmlFor="store_manager">Store manager</label>
          <input type="text" name="storeManager" id="store_manager" value={store.store_manager} onChange={changeHandler}
                 required/>

          <label htmlFor="phone_number">Phone number</label>
          <input type="tel" name="phoneNumber" id="phone_number" value={store.phone_number} onChange={changeHandler}
                 required/>

          <label htmlFor="store_type">Store Type</label>
          <input type="text" name="storeType" id="store_type" value={store.store_type} onChange={changeHandler}
                 required/>

          <label htmlFor="default_wh">Default Warehouse</label>
          <input type="number" name="defaultWh" id="default_wh" value={store.default_wh} onChange={changeHandler}
                 required/>

          <label htmlFor="open_date">Store open date</label>
          <input type="date" name="openDate" id="open_date" value={store.open_date} onChange={changeHandler} required/>

          {/*<label htmlFor="close_date">Store close date</label>*/}
          {/*<input type="date" name="closeDate" id="close_date" value={store.close_date} onChange={changeHandler}/>*/}
        </div>

        <UploadCSV/>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
export default CreateStore;
