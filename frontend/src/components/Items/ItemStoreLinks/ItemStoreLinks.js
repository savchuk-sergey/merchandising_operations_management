import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {CSVLink} from "react-csv";
import {setItemStores} from "../../../redux/reducers/itemStoresReducer";
import getItemStoreLinks from "../../../logic/getItemStoreLinks.logic";

const ItemStoreLinks = (props) => {
  const dispatch = useDispatch()
  const itemStores = useSelector(state => state.itemStores.itemStores)

  useEffect(() => {
    getItemStoreLinks().then(
      r => {
        dispatch(setItemStores(r))
        console.log(itemStores)
      }
    )
  }, []);

  return (
    <>
      <h4 className='center'>Item Store Links</h4>
      <div className='z-depth-3 custom-container center'>
        <table id="items_table" className="tg">
          <thead>
          <tr>
            <th className="tg-0lax">Item</th>
            <th className="tg-0lax">Store</th>
            <th className="tg-0lax">Retail Price</th>
            <th className="tg-0lax">Quantity</th>
          </tr>
          </thead>
          <tbody>
          {
            itemStores.map((itemStore, i) =>
              <tr key={i}>
                <td className="tg-0lax">{itemStore.item_id}</td>
                <td className="tg-0lax">{itemStore.store_id}</td>
                <td className="tg-0lax">{itemStore.retail_price}</td>
                <td className="tg-0lax">{itemStore.qty}</td>
              </tr>
            )
          }
          </tbody>
        </table>
        <br/>
      </div><br/>
      <div className='center'>
        <CSVLink className='btn'
                 data={itemStores}
                 filename={`ItemStoreLinks_${Date.now()}.csv`}
        >
          Download as CSV</CSVLink>
      </div>
    </>
  )
}
export default ItemStoreLinks;
