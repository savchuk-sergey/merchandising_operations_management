import React, {useEffect, useState} from 'react'

import '../assets/css/App.css'
import Signin from "./Signin/Signin";
import Items from "./Items/Items";
import {Route, Routes, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "./Navbar/Navbar";
import Stores from "./Stores/Stores";
import Promotions from "./Promotions/Promotions";
import {setUser} from "../redux/reducers/userReducer";
import CreatePromotion from "./Promotions/CreatePromotion/CreatePromotion";
import CreateItem from "./Items/CreateItem/CreateItem";
import CreateStore from "./Stores/CreateStore/CreateStore";
import ItemStoreLinks from "./Items/ItemStoreLinks/ItemStoreLinks";
import CreateItemStoreLink from "./Items/CreateItemStoreLink/CreateItemStoreLink";
import ChangePrice from "./ChangePrice/ChangePrice";
import Packs from "./Packs/Packs";
import CreatePack from "./Packs/CreatePack/CreatePack";
import Whs from "./Whs/Whs";
import PackWhLinks from "./Packs/PackWhList/PackWhLinks";

function App() {
  const currentUser = useSelector(state => state.user.jwt)
  const dispatch = useDispatch()

  useEffect(
    () => {
      const jwt = localStorage.getItem('token')
      if (!currentUser && jwt) {
        dispatch(setUser('', jwt))
      }
    }, []
  )


  if (!currentUser) {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/*'
                 element={<Signin/>}/>
        </Routes>
      </>
    )
  } else {
    return (
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/index.html' element={<Navigate to='/Items'/>}/>
          <Route path='/Items'
                 element={<Items/>}/>
          <Route path='/Stores'
                 element={<Stores/>}/>
          <Route path='/Promotions'
                 element={<Promotions/>}/>
          <Route path='/PromotionsCreate'
                 element={<CreatePromotion/>}/>
          <Route path='/ItemsCreate'
                 element={<CreateItem/>}/>
          <Route path='/StoresCreate'
                 element={<CreateStore/>}/>
          <Route path='/ItemStoreLinks'
                 element={<ItemStoreLinks/>}/>
          <Route path='/ItemStoreLinkCreate'
                 element={<CreateItemStoreLink/>}/>
          <Route path='/ChangePrice'
                 element={<ChangePrice/>}/>
          <Route path='/Packs'
                 element={<Packs/>}/>
          <Route path='/CreatePack'
                 element={<CreatePack/>}/>
          <Route path='/Warehouses'
                 element={<Whs/>}/>
          <Route path='/PackWhLinks'
                   element={<PackWhLinks/>}/>
        </Routes>
      </div>
    )
  }
}

export default App
