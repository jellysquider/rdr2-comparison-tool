import React from 'react';

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

import Gallery from './components/Gallery';
import SearchBox from 'components/SearchBox';

import './assets/styles/App.sass'

function App(props) {

  return (
    <div>
      <Heading>
        RDR2
      </Heading>
      <Container>
        <SearchBox />
        <Gallery />
      </Container>
    </div>
  );
}

export default App;