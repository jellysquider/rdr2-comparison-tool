import React from 'react'
import PropTypes from 'prop-types'

import '../assets/styles/Header.sass'

function Header({ header }) {
  return (
    <div className="header-wrapper">
      <h1>{header}</h1>
    </div>
  )
}

Header.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Header
