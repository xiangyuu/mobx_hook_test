import {action, computed, observable} from "mobx";
import img1 from '../static/img/外套2.jpg'
import img2 from '../static/img/外套1.jpg'
import img3 from '../static/img/短袖1.jpg'
import img4 from '../static/img/短袖2.jpg'
import img5 from '../static/img/配件1.jpg'

class AppStore{
  @observable productsList=[
    {id:1,name:'商品1',cost:100,img:img1},
    {id:2,name:'商品2',cost:200,img:img2},
    {id:3,name:'商品3',cost:300,img:img3},
    {id:4,name:'商品4',cost:400,img:img4},
    {id:5,name:'商品5',cost:500,img:img5},
  ]
  @observable cartList=[

  ]

  @action addCartList(product){
    this.cartList.push(product)
  }

}
const store=new AppStore()
export default store
