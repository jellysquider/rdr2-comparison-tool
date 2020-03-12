import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Card from 'react-bulma-components/lib/components/card'
import Heading from 'react-bulma-components/lib/components/heading'

import GalleryItemStats from './GalleryItemStats'

import '../../assets/styles/Card.sass'

class GalleryItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSelected: false,
    }
  }

  componentDidMount() {
    // make sure previously selected items stay selected
    if (this.props.itemsToCompare.includes(this.props.weapon)) {
      this.setState({
        isSelected: true,
      })
    }
  }

  toggleSelected = () => {
    this.setState(state => ({
      isSelected: !state.isSelected,
    }))
  }

  render() {
    const { name, description, imgURL, ...otherProps } = this.props.weapon

    return (
      <Card
        className={
          this.state.isSelected ? 'card-gallery card-selected' : 'card-gallery'
        }
        onClick={this.toggleSelected}
      >
        <Card.Image src={imgURL} alt={name} />
        <Card.Content>
          <Heading className="card-title" size={4}>
            {name}
          </Heading>
          <Heading className="card-description" size={5}>
            {description}
          </Heading>
        </Card.Content>
        <GalleryItemStats {...otherProps} />
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemsToCompare: state.updateItemsToCompareReducer.itemsToCompare,
  }
}

GalleryItem.propTypes = {
  itemsToCompare: PropTypes.object.isRequired,
  weapon: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(GalleryItem)
