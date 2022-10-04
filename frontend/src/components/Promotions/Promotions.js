import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import getPromotions from "../../logic/getPromotions";
import {setPromotions} from "../../redux/reducers/promotionReducer";
import formatDateTime from "../utils/formatDateTime";
import {CSVLink} from "react-csv";

const Promotions = (props) => {
  const dispatch = useDispatch()
  const promotions = useSelector(state => state.promotions.promotions)

  useEffect(() => {
    getPromotions().then(
      r => {
        console.log(r)
        dispatch(setPromotions(r))
      }
    )
  }, []);

  return (
    <div className="container center">
      <h4>Promotions</h4>
      <table id="items_table" className="tg card"
      >
        <thead>
        <tr>
          <th className="tg-0lax">id</th>
          <th className="tg-0lax">item</th>
          <th className="tg-0lax">store</th>
          <th className="tg-0lax">discount_type</th>
          <th className="tg-0lax">discount_amount</th>
          <th className="tg-0lax">start_date</th>
          <th className="tg-0lax">end_date</th>
        </tr>
        </thead>
        <tbody>
        {
          promotions.map((promotion, i) =>
            <tr key={i}>
              <td className="tg-0lax">{promotion.id}</td>
              <td className="tg-0lax">{promotion.item}</td>
              <td className="tg-0lax">{promotion.store}</td>
              <td className="tg-0lax">{promotion.discount_type}</td>
              <td className="tg-0lax">{promotion.discount_amount}</td>
              <td className="tg-0lax">
                {
                  formatDateTime(promotion.start_date)
                }
              </td>
              <td className="tg-0lax">
                {
                  formatDateTime(promotion.end_date)
                }
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
      <CSVLink className='btn'
               data={promotions}
               filename={`promotions_${Date.now()}.csv`}
      >
        Download as CSV</CSVLink>
    </div>
  )
}
export default Promotions;
