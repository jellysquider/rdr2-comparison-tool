import React from 'react';
import { Switch, Route} from 'react-router-dom';

import DisplayItemsPage from './components/pages/DisplayItemsPage';
import CompareItemsPage from './components/pages/CompareItemsPage';

import './assets/styles/App.sass';

function App(props) {

  return (
    <div>
      {/* Switch will render only one component that got matched */}
      <Switch>
        <Route exact path="/" component={DisplayItemsPage} />
        <Route
          path="/compareWeapons/:items"
          component={CompareItemsPage}
        />
      </Switch>
    </div>
  );
}

export default App;