import React from 'react';
import AppStore from '../../store/index'
import {useLocalStore} from "mobx-react";
import './index.scss'
function Mask(props) {
  const store=useLocalStore(()=>AppStore)
  return (
    <div className='mask'>
      <ul>
        {store.cartList.map((e,key)=>(
          <li key={key}>{e.name}----${e.cost}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mask;
