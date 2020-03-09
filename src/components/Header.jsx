import React from 'react';

import '../assets/styles/Header.sass';

function Header({ header }) {
  return (
    <div className="header-wrapper">
      <h1>{header}</h1>
    </div>
  )
}

export default Header;