import React, {useState} from 'react'
import Button from "react-materialize/lib/Button";
import UploadCSV from "../../utils/UploadCSV";

const CreateStore = (props) => {
  const [store, setStore] = useState({
    store: '',
    storeName: '',
    storeManager: '',
    phoneNumber: '',
    storeType: '',
    defaultWh: '',
    openDate: '',
    closeDate: ''
  })

  const submitHandler = (e) => {
    e.preventDefault()

  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.name] = e.target.value

    setStore(store => ({
      ...store,
      obj
    }))
  }

  return (
    <div className="container center">
      <h4>Create Store</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor="store">Store No</label>
          <input type="number" name="store" id="store" value={store.store} onChange={changeHandler} required/>

          <label htmlFor="store_name">Store name</label>
          <input type="text" name="storeName" id="store_name" value={store.storeName} onChange={changeHandler}
                 required/>

          <label htmlFor="store_manager">Store manager</label>
          <input type="text" name="storeManager" id="store_manager" value={store.storeManager} onChange={changeHandler}
                 required/>

          <label htmlFor="phone_number">Phone number</label>
          <input type="tel" name="phoneNumber" id="phone_number" value={store.phoneNumber} onChange={changeHandler}
                 required/>

          <label htmlFor="store_type">Store Type</label>
          <input type="text" name="storeType" id="store_type" value={store.storeType} onChange={changeHandler}
                 required/>

          <label htmlFor="default_wh">Default Warehouse</label>
          <input type="number" name="defaultWh" id="default_wh" value={store.defaultWh} onChange={changeHandler}
                 required/>

          <label htmlFor="open_date">Store open date</label>
          <input type="date" name="openDate" id="open_date" value={store.openDate} onChange={changeHandler} required/>

          <label htmlFor="close_date">Store close date</label>
          <input type="date" name="closeDate" id="close_date" value={store.closeDate} onChange={changeHandler}/>
        </div>

        <UploadCSV/>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
export default CreateStore;
