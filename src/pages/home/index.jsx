import React from 'react';
import {useLocalStore, useObserver} from "mobx-react";
import globalStore from '../../store/index'
import './index.scss'
import logo from '../../static/img/header.svg'
import cart from '../../static/img/cart.png'


function Home(props) {
  const store=useLocalStore(()=>globalStore)

  function addCartItem(e){
    store.addCartList(e)
    console.log(store.cartList.length)
  }

  return useObserver(()=>
    <div className='home'>
      <div className='nav'>
        <div className='header'>
          <div className='logo'><img src={logo}/></div>
          <div className='login'>
            <button>注册</button>
            <button>登入</button>
          </div>
        </div>
        <div className='catalog'>
          <ul>
            <li>上衣</li>
            <li>短裤</li>
            <li>长袖</li>
            <li>长裤</li>
            <li>外套</li>
            <li>配件</li>
          </ul>
        </div>
      </div>
      <div className='body'>
        <div className='img-list'>
          {store.productsList.map((e, key) => (
            <div className='item'>
              <div className='img' key={key}>
                <img src={e.img}/>
              </div>
              <div className='item-detail'>
                <div className='item-txt'>
                  <span>{e.name}</span>
                  <span>${e.cost}</span>
                </div>
                <div onClick={()=>addCartItem(e)} className='cart'>
                  <img src={cart}/>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
