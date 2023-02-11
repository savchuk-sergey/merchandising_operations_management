import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import { setSuppliers } from '../../redux/reducers/suppliersReducer'
import getSuppliers from '../../logic/getSuppliers.logic'

const Suppliers = () => {
  const dispatch = useDispatch()
  const suppliers = useSelector(
    (state) => state.suppliers.suppliers
  )

  useEffect(() => {
    getSuppliers().then((r) => {
      dispatch(setSuppliers(r))
    })
  }, [])

  return (
    <>
      <h4 className='center'>Suppliers</h4>
      <div className='z-depth-3 custom-container center'>
        <table id='items_table' className='tg'>
          <thead>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>Id</th>
              <th className='tg-0lax'>name</th>
              <th className='tg-0lax'>address</th>
              <th className='tg-0lax'>phone_number</th>
            </tr>
            <tr style={{ border: '0px' }}>
              <th className='tg-0lax'>
                <input name='Id' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='name' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='address' type='text' />
              </th>
              <th className='tg-0lax'>
                <input name='phone_number' type='text' />
              </th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, i) => (
              <tr key={i}>
                <td className='tg-0lax'>{supplier.id}</td>
                <td className='tg-0lax'>{supplier.name}</td>
                <td className='tg-0lax'>
                  {supplier.address}
                </td>
                <td className='tg-0lax'>
                  {supplier.phone_number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className='center'>
        <CSVLink
          className='btn'
          data={suppliers}
          filename={`Suppliers_${Date.now()}.csv`}
        >
          Download as CSV
        </CSVLink>
      </div>
    </>
  )
}
export default Suppliers
