import React, { Component } from 'react';

import Level from 'react-bulma-components/lib/components/level';

import StatDisplay from './StatDisplay'

// { damage, range, firingRate, accuracy, reloadingSpeed, cost }
//const CardStats = (props) => {
class ItemStats extends Component {

  render() {
    const { weaponsType, ...items } = this.props;
    
    return (
      <Level className="card-footer">
        {
          Object.entries(items).map((item, index) => {
            if ((item[0] === "damage" || item[0] === "range" || item[0] === "firingRate")
            && (item[1] != null)) {
              return (
                <Level.Side key={index} align="left">
                  <StatDisplay statName={item[0]} statValue={item[1]} />
                </Level.Side>
              )
            }
            else if ((item[0] === "accuracy" || item[0] === "reloadingSpeed" || item[0] === "cost")
            && (item[1] != null)) {
              return (
                <Level.Side key={index} align="right">
                  <StatDisplay statName={item[0]} statValue={item[1]} />
                </Level.Side>
              )
            }
            return ""
          }
          )
        }
      </Level>
    )
  }
}

export default ItemStats;