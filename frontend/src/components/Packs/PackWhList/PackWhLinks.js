import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {CSVLink} from "react-csv";
import getPackWhLinks from "../../../logic/getPackWhLinks.logic";
import {setPackWhs} from "../../../redux/reducers/PackWhsReducer";

const PackWhLinks = (props) => {
  const dispatch = useDispatch()
  const packWhs = useSelector(state => state.packWhs.packWhs)

  useEffect(() => {
    getPackWhLinks().then(
      r => {
        dispatch(setPackWhs(r))
        console.log(packWhs)
        console.log(r)
      }
    )
  }, []);

  return (
    <>
      <h4 className='center'>Pack Warehouse Links</h4>
      <div className='z-depth-3 custom-container center'>
        <table id="items_table" className="tg">
          <thead>
          <tr>
            <th className="tg-0lax">Pack</th>
            <th className="tg-0lax">Warehouse</th>
            <th className="tg-0lax">Quantity</th>
          </tr>
          </thead>
          <tbody>
          {
            packWhs.map((packWh, i) =>
              <tr key={i}>
                <td className="tg-0lax">{packWh.pack}</td>
                <td className="tg-0lax">{packWh.wh}</td>
                <td className="tg-0lax">{packWh.qty}</td>
              </tr>
            )
          }
          </tbody>
        </table>
        <br/>
      </div><br/>
      <div className='center'>
        <CSVLink className='btn'
                 data={packWhs}
                 filename={`PackWarehouseLinks_${Date.now()}.csv`}
        >
          Download as CSV</CSVLink>
      </div>
    </>
  )
}
export default PackWhLinks;
