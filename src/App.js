import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Mask from "./component/Mask";
import AppStore from './store/index'
import {useLocalStore, useObserver} from "mobx-react";
function App() {
  const store=useLocalStore(()=>AppStore)
  return useObserver(()=>
    <div className="app">
      <Home/>
      {store.cartList.length!==0?<Mask/>:''}
    </div>
  );
}

export default App;
