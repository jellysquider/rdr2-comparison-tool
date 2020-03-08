import React from 'react';
import WEAPONS_STATS from '../../assets/data/weapons.stats';

import Container from 'react-bulma-components/lib/components/container';
import ComparisonTable from '../ComparisonTable';

function CompareItemsPage({match}) {

  // console.log("parameters: ", match.params.items)

  const data = WEAPONS_STATS;

  const givenItems = match.params.items.split(/[-]/g)
  
  // console.log("parsed items: ", givenItems)

  var compareItemsData = []

  for (var elem in data) {
    for (var item in givenItems) {
      let fullItemStr = data[elem].type.toLowerCase().concat(data[elem].id.toString())
      // console.log("compare between ", data[elem], givenItems[item])
      if (fullItemStr === givenItems[item]) {
        compareItemsData.push(data[elem])
      }
    }
  }

  // console.log("retrieved items: ", compareItemsData)
  
  return (
    <div>
      <Container>
        <p>Compare Items</p>
        <ComparisonTable compareItemsData={compareItemsData} />
      </Container>
      
    </div>
  )
}

export default CompareItemsPage;