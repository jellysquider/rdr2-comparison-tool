import React from 'react';

import Level from 'react-bulma-components/lib/components/level';

import DisplayItemStats from '../DisplayItemStats';

function GalleryItemStats({ weaponsType, ...items }) {
  return (
    <Level className="card-footer">
      {
        Object.entries(items).map((item, index) => {
          if ((item[0] === "damage" || item[0] === "range" || item[0] === "firingRate")
          && (item[1] != null)) {
            return (
              <Level.Side key={index} align="left">
                <DisplayItemStats statType={"Gallery"} statName={item[0]} statValue={item[1]} />
              </Level.Side>
            )
          }
          else if ((item[0] === "accuracy" || item[0] === "reloadingSpeed" || item[0] === "cost")
          && (item[1] != null)) {
            return (
              <Level.Side key={index} align="right">
                <DisplayItemStats statType={"Gallery"} statName={item[0]} statValue={item[1]} />
              </Level.Side>
            )
          }
          return ""
        })
      }
    </Level>
  )
}

export default GalleryItemStats;