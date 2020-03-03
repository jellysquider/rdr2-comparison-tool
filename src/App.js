import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bulma-components/lib/components/button';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Footer from 'components/Footer';

import Gallery from './components/Gallery';
import SearchBox from './components/SearchBox';


import './assets/styles/App.sass'

function App(props) {
  
  {console.log("APP JS ", props.itemsToCompare) }

  return (
    <div>
      <Container>
        <Heading>
          RDR2
        </Heading>
        <SearchBox />
        <Gallery />
        {
          props.itemsToCompare.size >= 2
          && <Button fullwidth={true} inverted={true} className="compare-btn"> Compare selected weapons</Button>
        }
      </Container>
      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    itemsToCompare: state.setItemsToCompareReducer.itemsToCompare
  }
}

export default connect(mapStateToProps)(App);