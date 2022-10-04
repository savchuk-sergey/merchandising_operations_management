import React, {useState} from 'react'
import Button from "react-materialize/lib/Button";
import UploadCSV from "../../utils/UploadCSV";
import postData from "../../../logic/utils/postData";

const CreatePromotion = (props) => {
  const [promotion, setPromotion] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/post_promotion', promotion)
      .then(r => {
        console.log('error')
      })
      .catch(e => {
        console.log(e)
        M.toast({html: e.message})
      })
    console.log(promotion)
  }

  const changeHandler = (e) => {
    let obj = {}
    obj[e.target.id] = e.target.value

    setPromotion(promotion => ({
      ...promotion,
      ...obj
    }))
  }

  return (
    <div className="container center">
      <h4>Create Promotions</h4>
      <form onSubmit={submitHandler}>
        <div className='z-depth-3 custom-container'>
          <label htmlFor="item">Item No</label>
          <input type="text" name="item" id="item" required value={promotion.item} onChange={changeHandler}/><br/>

          <label htmlFor="store">Store No</label>
          <input type="number" name="store" id="store" required value={promotion.store} onChange={changeHandler}/><br/>

          <label htmlFor="discount_type">Discount type</label>
          <input type="text" name="discountType" id="discount_type" required value={promotion.discountType}
                 onChange={changeHandler}/><br/>

          <label htmlFor="discount_amount">Discount amount</label>
          <input type="number" name="discountAmount" id="discount_amount" required value={promotion.discountAmount}
                 onChange={changeHandler}/><br/>

          <label htmlFor="start_date">Start date</label>
          <input type="date" name="startDate" id="start_date" required value={promotion.startDate}
                 onChange={changeHandler}/><br/>

          <label htmlFor="end_date">End date</label>
          <input type="date" name="endDate" id="end_date" required value={promotion.endDate}
                 onChange={changeHandler}/><br/>
        </div>
        <br/>
        <UploadCSV/>

        <Button type="submit">Submit</Button>
      </form>

    </div>
  )
}
export default CreatePromotion;
