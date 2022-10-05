import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import formatDateTime from "../utils/formatDateTime";
import {CSVLink} from "react-csv";
import getOrders from "../../logic/getOrders.logic";
import {setOrders} from "../../redux/reducers/OrdersReducer";

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.orders)

  useEffect(() => {
    getOrders().then(
      r => {
        console.log(orders)
        dispatch(setOrders(r))
      }
    )
  }, []);

  return (
    <>
      <h4 className='center'>Orders</h4>
      <div className='z-depth-3 custom-container center'>
        <input type="text" name="item" id="item" value={''}  required/>
        <table id="items_table" className="tg">
          <thead>
          <tr>
            <th className="tg-0lax">Id</th>
            <th className="tg-0lax">supplier_id</th>
            <th className="tg-0lax">wh_id</th>
            <th className="tg-0lax">status</th>
            <th className="tg-0lax">order_date</th>
            <th className="tg-0lax">receive_date</th>
          </tr>
          </thead>
          <tbody>
          {
            orders.map((order, i) =>
              <tr key={i}>
                <td className="tg-0lax">{order.id}</td>
                <td className="tg-0lax">{order.supplier_id}</td>
                <td className="tg-0lax">{order.wh_id}</td>
                <td className="tg-0lax">{order.status}</td>
                <td className="tg-0lax">{
                  formatDateTime(order.order_date)
                }</td>
                <td className="tg-0lax">{
                  formatDateTime(order.receive_date)
                }</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
      <br/>
      <div className='center'>
        <CSVLink className='btn'
                 data={orders}
                 filename={`Orders_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Orders;
