import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-solid-svg-icons'

import Icon from 'react-bulma-components/lib/components/icon'
import {
  Field,
  Control,
  Input,
} from 'react-bulma-components/lib/components/form'

import '../assets/styles/SearchBar.sass'

import { getSearchResult } from '../Redux/searchQuery/sQActions'

function SearchBar(props) {
  return (
    <Field>
      <Control iconRight>
        <Input
          className="search"
          type="search"
          placeholder="Search for a weapon"
          onChange={props.onSearchQueryChange}
          value={props.searchQuery}
        />
        <Icon align="right">
          <FontAwesomeIcon icon={faSearch} />
        </Icon>
      </Control>
    </Field>
  )
}

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQueryReducer.searchQuery,
  }
}

// dispatch action to update searchQuery while the user is typing
function mapDispatchToProps(dispatch) {
  return {
    onSearchQueryChange: event => {
      let searchQuery = event.target.value
      dispatch(getSearchResult(searchQuery))
    },
  }
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
