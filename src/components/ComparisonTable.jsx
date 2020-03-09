import React, { Component } from 'react';

import Image from 'react-bulma-components/lib/components/image';

import StatDisplay from './DisplayItemStats';

import '../assets/styles/Table.sass';

class ComparisonTable extends Component {
  
  constructor(props) {
    super(props);
    
    // console.log(this.props.compareItemsData)

    this.state = {
      // intialize an array with 5 empty strings,
      activeStatsHeaders: {
        "name": {
          "isSelected": true,
          "isAscending": true,
        },
        "damage": {
          "isSelected": false,
          "isAscending": false,
        },
        "firing Rate": {
          "isSelected": false,
          "isAscending": false,
        },
        "range": {
          "isSelected": false,
          "isAscending": false,
        },
        "accuracy": {
          "isSelected": false,
          "isAscending": false,
        },
        "reloading Speed": {
          "isSelected": false,
          "isAscending": false,
        },
        "ammo Capacity": {
          "isSelected": false,
          "isAscending": false,
        },
        "cost": {
          "isSelected": false,
          "isAscending": false,
        }
      },
      compareItemsData: this.props.compareItemsData.sort((a, b) => (a["name"] > b["name"]) ? 1 : -1),
      itemOrderAscending: true,
      mobileSize: false,
      statsToSort: new Set()
    }

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  

  updateWindowDimensions = () => {
    if (window.innerWidth < 900) {
      this.setState({
        mobileSize: true
      });
    }
    else {
      this.setState({
        mobileSize: false
      });
    }
  }

  handleClickSortBy = (itemStat) => {

    const activeStatsHeaders = this.state.activeStatsHeaders

    let copyActiveStats = Object.assign({}, activeStatsHeaders)

    // if the stat is not selected, set it to be selected and ascending
    if (!activeStatsHeaders[itemStat].isSelected) {
      copyActiveStats[itemStat].isSelected = true
      copyActiveStats[itemStat].isAscending = true
      
      // make ascending sorting
      this.setState((prevState) => {
        return {
          activeStatsHeaders: copyActiveStats,
          compareItemsData: prevState.compareItemsData.sort((a, b) => (a[itemStat.replace(' ', '')] > b[itemStat.replace(' ', '')]) ? 1 : -1)
        }
      })
    }

    // selected
    else {
      // if it the stat is currently selected and ascending, set it to be descending
      if (copyActiveStats[itemStat].isAscending) {
        copyActiveStats[itemStat].isAscending = false

        // descending sorting
        this.setState((prevState) => {
          return {
            activeStatsHeaders: copyActiveStats,
            compareItemsData: prevState.compareItemsData.sort((a, b) => (a[itemStat.replace(' ', '')] < b[itemStat.replace(' ', '')]) ? 1 : -1)
          }
        })
      }
      // if the stat is selected and descending, set it to be not selected anymore since it was user's third click
      else {
        copyActiveStats[itemStat].isSelected = false
      }
    }

    Object.keys(copyActiveStats).map(currStat => {
      if (currStat !== itemStat) {
        copyActiveStats[currStat].isSelected = false
        copyActiveStats[currStat].isAscending = false
      }
    })

  }
    

  render() {

    const { activeStatsHeaders, compareItemsData, mobileSize } = this.state;
    
    return (
      <table>
        <thead>
          <tr>
            {/* don't show image column on screens where it wouldn't fit */}
            <th className="table-image-header" style={{ display: mobileSize ? 'none' : 'table-cell' }}>
              Image
            </th>
            {
              Object.keys(activeStatsHeaders).map((header, index) => (
                <th
                  // conditional class name to ensure corrent arrows are shown for ascending/descending selection
                  className={
                    activeStatsHeaders[header].isSelected
                      ? (activeStatsHeaders[header].isAscending ? 'stat-active ascending' : 'stat-active descending')
                      : null
                  }
                  key={index}
                  onClick={() => this.handleClickSortBy(header)}
                >
                  <StatDisplay
                    statType="Table Headers"
                    statName={header}
                  />
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          
          {
            compareItemsData.map(item => (
              <tr key={item.id}>
                {/* don't show image column on screens where it wouldn't fit */}
                <td style={{ display: mobileSize ? 'none' : 'table-cell' }}>
                  <Image style={{ maxWidth: '350px', margin: '0' }} src={item.imgURL} />
                </td>
                {
                  Object.keys(activeStatsHeaders).map((header, index) => (
                    <td key={index}>
                      <StatDisplay
                        statType="Table Data"
                        // remove spaces to access statValue in JSON data
                        statValue={item[header.replace(' ', '')]}
                      />
                    </td>
                  )) 
                }
              </tr>
            ))
          }

        </tbody>
      </table>
    )
  }
}

export default ComparisonTable;