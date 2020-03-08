import React, { Component } from 'react';

import Image from 'react-bulma-components/lib/components/image';

import StatDisplay from './DisplayItemStats';

import '../assets/styles/Table.sass';

class ComparisonTable extends Component {
  
  constructor(props) {
    super(props);
    
    // console.log(this.props.compareItemsData)

    this.state = {
      mobileSize: false,
      compareItemsData: this.props.compareItemsData.slice(),
      itemOrderAscending: true,
      tableHeaders: [
        "name",
        "damage",
        "range",
        "firing Rate",
        "accuracy",
        "reloading Speed",
        "ammo Capacity",
        "cost"
      ]
    }

  }

  componentDidMount() {
    this.updateWindowDimensions();
    // this.sortBy("firingRate", "descending");
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

  sortBy = (itemValue, itemOrderAscending) => {
    // itemOrder === 0 -> descending, 1 -> ascending
    // console.log("itemValue", itemValue)
    // console.log("out of sortBy", this.state.compareItemsData.sort((a, b) => (a[itemValue] < b[itemValue]) ? 1 : -1))
    

    if (itemOrderAscending) {
      this.setState((prevState) => {
        return {
          compareItemsData: prevState.compareItemsData.sort((a, b) => (a[itemValue] > b[itemValue]) ? 1 : -1),
          itemOrderAscending: true
        }
      })
    }
    else {
      this.setState((prevState) => {
        return {
          compareItemsData: prevState.compareItemsData.sort((a, b) => (a[itemValue] < b[itemValue]) ? 1 : -1),
          itemOrderAscending: false
        }
      })
    }
  }
    

  render() {
    
    const { tableHeaders, compareItemsData } = this.state;
    // console.log(compareItemsData)
    
    return (
      <table>
        <thead>
          <tr>
            <th className="table-image-header" style={{ display: this.state.mobileSize ? 'none' : 'table-cell' }}>
              Image
            </th>
            {
              tableHeaders.map((header, index) => (
                <th key={index} onClick={() => this.sortBy(header.replace(' ', ''), !this.state.itemOrderAscending)}>
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
                <td style={{ display: this.state.mobileSize ? 'none' : 'table-cell' }}>
                  <Image style={{ maxWidth: '350px' }} src={item.imgURL} />
                </td>
                {
                  tableHeaders.map((header, index) => (
                    <td key={index}>
                      <StatDisplay
                        statType="Table Data"
                        statValue={item[`${header.replace(' ', '')}`]}
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