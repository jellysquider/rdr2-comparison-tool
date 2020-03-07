import React from 'react';
import WEAPONS_STATS from '../assets/data/weapons.stats';

function ItemComparisonPage({match}) {

  // console.log("parameters: ", match.params.items)

  const data = WEAPONS_STATS;

  var givenItems = match.params.items.split(/[-]/g)
  
  // console.log("parsed items: ", givenItems)

  var compareItems = []

  for (var elem in data) {
    for (var item in givenItems) {
      let fullItemStr = data[elem].type.toLowerCase().concat(data[elem].id.toString())
      // console.log("compare between ", data[elem], givenItems[item])
      if (fullItemStr === givenItems[item]) {
        compareItems.push(data[elem])
      }
    }
  }

  console.log("retrieved items: ", compareItems)

  return (
    <div>
      <ul>Compare Items
      {
        compareItems.map(item =>
          <li key={item.id}>{item.name}</li>
        )
      }
      </ul>
    </div>
    
    
  )
}

export default ItemComparisonPage;