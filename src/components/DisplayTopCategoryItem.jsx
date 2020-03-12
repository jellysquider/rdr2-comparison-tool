import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'

import Level from 'react-bulma-components/lib/components/level'

import Header from './Header'
import GalleryItem from './Gallery/GalleryItem'

import '../assets/styles/TopCategoryItemNav.sass'

class DisplayTopCategoryItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topCategoryItem: this.props.compareItemsData.sort((a, b) =>
        a['damage'] < b['damage'] ? 1 : -1,
      )[0],
      categories: {
        damage: {
          isSelected: true,
          topItem: {},
        },
        'firing Rate': {
          isSelected: false,
          topItem: {},
        },
        range: {
          isSelected: false,
          topItem: {},
        },
        accuracy: {
          isSelected: false,
          topItem: {},
        },
        'reloading Speed': {
          isSelected: false,
          topItem: {},
        },
        'ammo Capacity': {
          isSelected: false,
          topItem: {},
        },
        cost: {
          isSelected: false,
          topItem: {},
        },
      },
      currCategoryIndex: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEvent)
  }

  handleEvent = (e, clickedButton) => {
    const { categories, currCategoryIndex } = this.state

    const categoriesKeys = Object.keys(categories)
    const categoriesLen = categoriesKeys.length

    const currCategoryName = categoriesKeys[currCategoryIndex]

    let copyOfCategories = Object.assign({}, categories)

    // if leftButton was clicked or Q key was pressed
    if (
      (clickedButton === 'leftButton' ||
        (e.type === 'keydown' && e.key.toLowerCase() === 'q')) &&
      currCategoryIndex > 0 && currCategoryIndex < categoriesLen
    ) {
      let nextCategoryName = categoriesKeys[currCategoryIndex - 1]

      // set circled to be selected or not
      copyOfCategories[currCategoryName].isSelected = false
      copyOfCategories[nextCategoryName].isSelected = true

      // find the top item for the category
      copyOfCategories[
        nextCategoryName
      ].topItem = this.props.compareItemsData.sort((a, b) =>
        a[nextCategoryName.replace(' ', '')] <
        b[nextCategoryName.replace(' ', '')]
          ? 1
          : -1,
      )[0]

      this.setState(prevState => {
        return {
          topCategoryItem: copyOfCategories[nextCategoryName].topItem,
          currCategoryIndex: prevState.currCategoryIndex - 1,
          categories: copyOfCategories,
        }
      })
    } else if (
      (clickedButton === 'rightButton' ||
        (e.type === 'keydown' && e.key.toLowerCase() === 'e')) &&
      currCategoryIndex >= 0 && currCategoryIndex < categoriesLen - 1
    ) {
      let nextCategoryName = categoriesKeys[currCategoryIndex + 1]

      copyOfCategories[currCategoryName].isSelected = false
      copyOfCategories[nextCategoryName].isSelected = true

      copyOfCategories[
        nextCategoryName
      ].topItem = this.props.compareItemsData.sort((a, b) =>
        a[nextCategoryName.replace(' ', '')] <
        b[nextCategoryName.replace(' ', '')]
          ? 1
          : -1,
      )[0]

      this.setState(prevState => {
        return {
          topCategoryItem: copyOfCategories[nextCategoryName].topItem,
          currCategoryIndex: prevState.currCategoryIndex + 1,
          categories: copyOfCategories,
        }
      })
    }
  }

  render() {
    const { topCategoryItem, categories, currCategoryIndex } = this.state

    return (
      <div className="nav-wrapper">
        <Header header="Top of category" />
        <Level className="category-nav">
          <Level.Item className="nav-button">
            <button onClick={e => this.handleEvent(e, 'leftButton')}>Q</button>
          </Level.Item>
          <Level.Item className="category-name">
            <h2>{Object.keys(categories)[currCategoryIndex].toUpperCase()}</h2>
          </Level.Item>
          <Level.Item className="nav-button">
            <button onClick={e => this.handleEvent(e, 'rightButton')}>E</button>
          </Level.Item>
        </Level>

        <Level className="category-nav-circles">
          {// iterate over categories object
          Object.keys(categories).map((category, index) => (
            // if isSelected bool is true, then the circle is currently selected
            <Level.Item
              key={index}
              className={
                categories[category].isSelected
                  ? 'category-circle circle-active'
                  : 'category-circle'
              }
            >
              <FontAwesomeIcon icon={faCircle} size="xs" />
            </Level.Item>
          ))}
        </Level>
        <GalleryItem weapon={topCategoryItem} />
      </div>
    )
  }
}

DisplayTopCategoryItem.propTypes = {
  compareItemsData: PropTypes.object.isRequired,
  topCategoryItem: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  currCategoryIndex: PropTypes.number.isRequired,
}

export default DisplayTopCategoryItem
