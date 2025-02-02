import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item_prices">
            <div className="item_newPrice">
                ${props.new_price}
            </div>
            <div className="item_oldPrice">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
