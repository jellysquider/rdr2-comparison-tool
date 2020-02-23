import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartBroken,
  faSignalStream,
  faRabbitFast,
  faBullseyeArrow,
  faSyncAlt,
  faSackDollar
} from '@fortawesome/pro-solid-svg-icons';

import Icon from 'react-bulma-components/lib/components/icon';
import Level from 'react-bulma-components/lib/components/level';

const StatDisplay = ({ statName, statValue }) => {

  
  var iconType = {}
  switch (statName) {
    case "damage":
      iconType = faHeartBroken
      break;
    case "range":
      iconType = faSignalStream
      break;
    case "firingRate":
      iconType = faRabbitFast
      break;
    case "accuracy":
      iconType = faBullseyeArrow
      break;
    case "reloadingSpeed":
      iconType = faSyncAlt
      break;
    case "cost":
      iconType = faSackDollar
      break;
    default:
        console.log('');
  }
  

  return (
    <React.Fragment>
      <Level.Item>
        <Icon>
          <FontAwesomeIcon icon={iconType} />
        </Icon>
        {parseFloat(`${statValue}`).toFixed(1)}
      </Level.Item>
    </React.Fragment>
  )
}

export default StatDisplay;