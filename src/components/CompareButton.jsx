import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Button.sass';

const CompareButton = ({ link }) => {

  return (
    <div className="compare-button-wrapper">
      <Link to={`/compareWeapons/${link}`}>
        Compare selected weapons
      </Link>
    </div>
  )

}

export default CompareButton;