import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {CSVLink} from "react-csv";
import getData from "../../logic/utils/getData";
import {setPacks} from "../../redux/reducers/PacksReducer";

const Packs = (props) => {
  const dispatch = useDispatch()
  const packs = useSelector(state => state.packs.packs)

  useEffect(() => {
    getData('http://localhost:3000/get_packs')
      .then(
        r => {
          dispatch(setPacks(r))
        }
      ).catch(e => console.log(e))
  }, []);

  return (
    <>
      <h4 className='center'>Packs</h4>
      <div className='z-depth-3 custom-container center'>
        <table id="items_table" className="tg">
          <thead>
          <tr>
            <th className="tg-0lax">Pack</th>
            <th className="tg-0lax">Supplier id</th>
            <th className="tg-0lax">Pack Quantity</th>
            <th className="tg-0lax">Item id</th>
            <th className="tg-0lax">Description</th>
            <th className="tg-0lax">Cost</th>
          </tr>
          </thead>
          <tbody>
          {
            packs.map((pack, i) =>
              <tr key={i}>
                <td className="tg-0lax">{pack.pack}</td>
                <td className="tg-0lax">{pack.supplier_id}</td>
                <td className="tg-0lax">{pack.pack_qty}</td>
                <td className="tg-0lax">{pack.item_id}</td>
                <td className="tg-0lax">{pack.description}</td>
                <td className="tg-0lax">{pack.cost}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
      <br/>
      <div className='center'>
        <CSVLink className='btn'
                 data={'her'}
                 filename={`Packs_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Packs;
