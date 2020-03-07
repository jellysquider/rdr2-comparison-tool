import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './components/HomePage';
import ItemComparisonPage from './components/ItemComparisonPage';

import './assets/styles/App.sass';

function App() {

  // url:
  // compareWeapons=PR1RR3M1T4
  return (
    <div>
      {/* Switch will render only one component that got matched */}
      <Switch>
          {/* exact is the bool that matches the path exactly 
              without exact every single forward-slash would be matched
          */}
        <Route exact path="/" component={HomePage} />
        <Route
          path="/compareWeapons/:items"
          component={ItemComparisonPage}
        />
          {/* // component={() => <ItemComparisonPage itemsToCompare={props.itemsToCompare} />} /> */}
        
          {/* <Route
            exact path="/compareWeapons"
            render={() =>
              props.itemsToCompare
                ? (<Redirect to="/" />)
                : (<ItemComparisonPage />)
            }
          /> */}
        </Switch>

      
    </div>
  );
}


export default App;