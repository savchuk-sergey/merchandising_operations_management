import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {CSVLink} from "react-csv";
import {setShipments} from "../../redux/reducers/shipmentsReducer";
import getShipments from "../../logic/getShipments.logic";

const Shipments = () => {
  const dispatch = useDispatch()
  const shipments = useSelector(state => state.shipments.shipments)

  useEffect(() => {
    getShipments().then(
      r => {
        dispatch(setShipments(r))
      }
    )
  }, []);

  return (
    <>
      <h4 className='center'>Shipments</h4>
      <div className='z-depth-3 custom-container center'>
        <input type="text" name="Shipments" id="Shipments" value={''}  required/>
        <table id="items_table" className="tg">
          <thead>
          <tr>
            <th className="tg-0lax">id</th>
            <th className="tg-0lax">from</th>
            <th className="tg-0lax">to</th>
            <th className="tg-0lax">in_date</th>
            <th className="tg-0lax">status</th>
            <th className="tg-0lax">out_date</th>
          </tr>
          </thead>
          <tbody>
          {
            shipments.map((shipment, i) =>
              <tr key={i}>
                <td className="tg-0lax">{shipment.id}</td>
                <td className="tg-0lax">{shipment.from}</td>
                <td className="tg-0lax">{shipment.to}</td>
                <td className="tg-0lax">{shipment.in_date}</td>
                <td className="tg-0lax">{shipment.status}</td>
                <td className="tg-0lax">{shipment.out_date}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
      <br/>
      <div className='center'>
        <CSVLink className='btn'
                 data={shipments}
                 filename={`Shipments${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Shipments;
