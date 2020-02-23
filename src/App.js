import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

import './assets/styles/App.sass'

import Gallery from './components/Gallery';

const App = () => {
  return (
    <div>
      <Heading>
        RDR2
      </Heading>
      <Container>
        <Gallery />
      </Container>
    </div>
  );
}

export default App;
