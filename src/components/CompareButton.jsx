import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../assets/styles/Button.sass'

const CompareButton = ({ link }) => {
  return (
    <div className="compare-button-wrapper">
      <Link to={`/compareWeapons/${link}`}>Compare selected weapons</Link>
    </div>
  )
}

CompareButton.propTypes = {
  link: PropTypes.string.isRequired,
}

export default CompareButton
