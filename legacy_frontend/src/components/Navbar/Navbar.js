import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  SideNav,
  Collapsible,
  CollapsibleItem,
} from 'react-materialize'
import { signOut } from '../../logic/auth.logic'
import { setUser } from '../../redux/reducers/userReducer'

const Navbar = () => {
  let currentUser = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  const clickHandler = () => {
    signOut()
    dispatch(setUser(undefined, undefined))
  }

  if (!currentUser) {
    return (
      <nav>
        <div className='nav-wrapper'>
          <ul className='left'></ul>
        </div>
      </nav>
    )
  } else {
    return (
      <>
        <SideNav
          className='sidenav-fixed'
          id='SideNav-85'
          options={{
            draggable: true,
          }}
        >
          <Collapsible accordion className='noselect'>
            <CollapsibleItem
              expanded={false}
              header='Price Management'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Promotions'>
                    List Promotions
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/PromotionsCreate'>
                    Create Promotions
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/ChangePrice'>
                    Change Price
                  </NavLink>
                </li>
              </ul>
            </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header='Items'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Items'>Items List</NavLink>
                </li>
                <li>
                  <NavLink to='/ItemsCreate'>
                    Create Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/ItemStoreLinks'>
                    Item Store Link List
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/ItemStoreLinkCreate'>
                    Create Item Store Link
                  </NavLink>
                </li>
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={false}
              header='Packs'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Packs'>Packs List</NavLink>
                </li>
                <li>
                  <NavLink to='/CreatePack'>
                    Create Packs
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/PackWhLinks'>
                    Pack Warehouse Links
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/CreatePackWhLink'>
                    Create Pack Wh Link
                  </NavLink>
                </li>
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={false}
              header='Stores'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Stores'>
                    List Stores
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/StoresCreate'>
                    Create Stores
                  </NavLink>
                </li>
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={false}
              header='Warehouses'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Warehouses'>
                    List Warehouses
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/CreateWh'>
                    Create Warehouses
                  </NavLink>
                </li>
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={false}
              header='Suppliers'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Suppliers'>
                    List Suppliers
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/SuppliersCreate'>
                    Create Suppliers
                  </NavLink>
                </li>
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={false}
              header='Orders'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Orders'>
                    List Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/OrdersCreate'>
                    Create Orders
                  </NavLink>
                </li>
                {/*<li>*/}
                {/*  <NavLink to='/OrdersDetails'>List Order Details</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <NavLink to='/OrdersDetailsCreate'>Create Order Details</NavLink>*/}
                {/*</li>*/}
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={false}
              header='Shipments'
              node='div'
            >
              <ul>
                <li>
                  <NavLink to='/Shipments'>
                    List Shipments
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/ShipmentsCreate'>
                    Create Shipments
                  </NavLink>
                </li>
                {/*<li>*/}
                {/*  <NavLink to='/ShipmentDetails'>List Shipment Details</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <NavLink to='/ShipmentDetailsCreate'>Create Shipment Details</NavLink>*/}
                {/*</li>*/}
              </ul>
            </CollapsibleItem>

            <CollapsibleItem
              expanded={true}
              onClick={clickHandler}
              header='Sign out'
              node='div'
              className='signout waves-light red lighten-2'
            ></CollapsibleItem>
          </Collapsible>
        </SideNav>
      </>
    )
  }
}
export default Navbar
