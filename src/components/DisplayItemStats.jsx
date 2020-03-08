import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartBroken,
  faSignalStream,
  faRabbitFast,
  faBullseyeArrow,
  faSyncAlt,
  faSpinner,
  faSackDollar
} from '@fortawesome/pro-solid-svg-icons';

import Icon from 'react-bulma-components/lib/components/icon';
import Level from 'react-bulma-components/lib/components/level';


const StatDisplay = ({ statType, statName, statValue }) => {
  
  var iconType = {}

  if (statType === "Gallery" || statType === "Table Headers") {
    switch (statName.replace(' ', '')) {
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
      case "ammoCapacity":
        iconType = faSpinner
        break;
      case "cost":
        iconType = faSackDollar
        break;
      default:
        iconType = null
    }
  }
  
  switch (statType) {
    case "Gallery":
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
    case "Table Headers":
      return (
        <React.Fragment>
          {
            iconType &&
              <Icon>
                <FontAwesomeIcon icon={iconType} size="lg" />
              </Icon>
          }
          {statName}
        </React.Fragment>
      )
    case "Table Data":
      return (
        <React.Fragment>
          {
            typeof { statValue } == "number"
            ? (parseFloat(`${statValue}`).toFixed(1))
            : statValue
          }
        </React.Fragment>
      )
    default:
      console.log("null")
      return null
  }
  
}

export default StatDisplay;