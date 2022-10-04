import React, {useEffect, useState} from 'react'
import getItems from "../../logic/getItems.logic";
import {useDispatch, useSelector} from "react-redux";
import {setItems} from "../../redux/reducers/itemsReducer";
import formatDateTime from "../utils/formatDateTime";
import {CSVLink} from "react-csv";

const Items = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.items)

  useEffect(() => {
    getItems().then(
      r => {
        dispatch(setItems(r))
      }
    )
  }, []);

  return (
    <>
      <h4 className='center'>Items</h4>
      <div className='z-depth-3 custom-container center'>
        <table id="items_table" className="tg">
          <thead>
          <tr>
            <th className="tg-0lax">Item</th>
            <th className="tg-0lax">item_type</th>
            <th className="tg-0lax">description</th>
            <th className="tg-0lax">start_retail</th>
            <th className="tg-0lax">uom</th>
            <th className="tg-0lax">created_at</th>
            <th className="tg-0lax">created_by</th>
            <th className="tg-0lax">updated_at</th>
            <th className="tg-0lax">updated_by</th>
            <th className="tg-0lax">selling_currency</th>
          </tr>
          </thead>
          <tbody>
          {
            items.map((item, i) =>
              <tr key={i}>
                <td className="tg-0lax">{item.item}</td>
                <td className="tg-0lax">{item.item_type}</td>
                <td className="tg-0lax">{item.description}</td>
                <td className="tg-0lax">{item.start_retail}</td>
                <td className="tg-0lax">{item.uom}</td>
                <td className="tg-0lax">{
                  formatDateTime(item.created_at)
                }</td>
                <td className="tg-0lax">{item.created_by}</td>
                <td className="tg-0lax">{
                  formatDateTime(item.updated_at)
                }</td>
                <td className="tg-0lax">{item.updated_by}</td>
                <td className="tg-0lax">{item.selling_currency}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
      <br/>
      <div className='center'>
        <CSVLink className='btn'
                 data={items}
                 filename={`Items_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Items;
