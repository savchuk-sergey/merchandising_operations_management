import React, {useState} from 'react'
import Button from "react-materialize/lib/Button";
import UploadCSV from "../../utils/UploadCSV";
import postData from "../../../logic/utils/postData";


const CreateItemStoreLink = (props) => {
  const [itemStore, setItemStore] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/post_item_store', itemStore)
      .then(r => {
        M.toast({html: r.message})
        console.log()
      })
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    setItemStore(item => ({
      ...itemStore,
      ...obj
    }))
  }

  return (
    <div className="container center">
      <h4>Create Item Store Link</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor="item">Item No</label>
          <input type="text" name="item" id="item" value={itemStore.item} onChange={changeHandler} required/><br/>

          <label htmlFor="item_type">Store</label>
          <input type="text" name="store" id="store" value={itemStore.store} onChange={changeHandler}
                 required/><br/>

          <label htmlFor="description">Retail Price</label>
          <input type="text" name="retailPrice" id="retail_price" value={itemStore.retailPrice} onChange={changeHandler}
                 required/><br/>
        </div>

        <UploadCSV/>

        <Button type="submit">Submit</Button>
      </form>

    </div>
  )
}
export default CreateItemStoreLink;
