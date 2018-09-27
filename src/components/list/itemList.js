import React from 'react'
import Item from '../item/item'

function ItemList(props) {
  return (
    <div>
      <p>Hola</p>
      {
        console.log(props.list)
        /*props.list.map((item) => {
          return <Item {...item} key={item.id} />
        })*/
      }
    </div>
  )

}


export default ItemList