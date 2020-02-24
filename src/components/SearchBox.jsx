import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';
import Icon from 'react-bulma-components/lib/components/icon';
import {
  Field,
  Control,
  Input
} from 'react-bulma-components/lib/components/form';

import '../assets/styles/SearchBox.sass'

const SearchBox = ({ placeholder, handleChange, value }) => (
  <Field>
    <Control iconRight>
      <Input 
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <Icon align="right">
        <FontAwesomeIcon icon={faSearch} />
      </Icon>

    </Control>
  </Field>
  
);

export default SearchBox;