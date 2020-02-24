import React, { Component } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

import WEAPONS_STATS from './assets/data/weapons.stats';

import './assets/styles/App.sass'

import Gallery from './components/Gallery';
import SearchBox from 'components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weaponStats: WEAPONS_STATS,
      searchField: ""
    };
  }


  render() {

    const { weaponStats, searchField } = this.state
    const filteredWeapons = weaponStats.map(category => (
      category.weapons.filter(weapon => (
        weapon.name.toLowerCase().includes(searchField.toLowerCase())
      ))
    ))

    return (
      <div>
        <Heading>
          RDR2
        </Heading>
        <Container>
          <SearchBox
            onSelect={record => console.log(record)}
            placeholder="search weapon"
            handleChange={e => this.setState({ searchField: e.target.value })}
            value={this.state.searchField}
          />
          <Gallery weapons={filteredWeapons} />
        </Container>
      </div>
    );
  }
}

export default App;