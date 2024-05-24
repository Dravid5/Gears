import React, { useContext } from 'react'
import './CSS/ShopCategories.css'
import {ShopContext} from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';


export const ShopCatogries = (props) => {
  
  const {all_products} = useContext(ShopContext);
  
  return (
    <div className="shop_category">
      <div className="index">
          <p><span>Showing 1-12</span> out of 48 products</p>
      </div>
      <div className="shop_products">
        {all_products.map((item,i)=>{
        if (props.category.toLowerCase() === item.category.toLowerCase()) {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
    })}
      </div>
      <div className="morebutton">
        <button>Explore More</button>
      </div>
    </div>
    )
}
