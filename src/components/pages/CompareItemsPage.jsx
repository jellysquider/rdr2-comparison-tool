import React from 'react';
import { Link } from 'react-router-dom';
import WEAPONS_STATS from '../../assets/data/weapons.stats';

import Container from 'react-bulma-components/lib/components/container';
import ComparisonTable from '../ComparisonTable';
import Header from '../Header';
import DisplayTopCategoryItem from '../DisplayTopCategoryItem';

import '../../assets/styles/Header.sass';

function CompareItemsPage({ match }) {

  const data = WEAPONS_STATS;

  // if provided link has more than 2 parameters
  // e.g. 'r1-r2' length is 5
  if (match.params.items.length > 4) {
    const parsedUrlItems = match.params.items.split(/[-]/g)

    var compareItemsData = []

    // iterate over JSON data
    for (var dataItem in data) {
      // iterate over items parsed from URL params
      for (var UrlItem in parsedUrlItems) {
        // create a string by combining item type and item id (e.g. type: r + id 2 -> r2)
        let fullItemStr = data[dataItem].type.toLowerCase().concat(data[dataItem].id.toString())

        // compare fullItemStr and current item in parsedUrlItems
        // add the item object to the compareItemsData array for further processing
        if (fullItemStr === parsedUrlItems[UrlItem]) {
          compareItemsData.push(data[dataItem])
        }
      }
    }
    
    return (
      <div>
        <Container>
          <Header header="Compare Items" />
          <ComparisonTable compareItemsData={compareItemsData} />
          <Header header="Top of category" />
          <DisplayTopCategoryItem />
        </Container>
        
      </div>
    )
  }

  else {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Nothing to compare</h1>
        <h2>Go back to</h2>
        <Link to='/' style={{ color: 'white' }}><h2>the main page</h2></Link>
        <h2>and select more than 1 item</h2>
      </div>
    )
  }
    
  
}

export default CompareItemsPage;