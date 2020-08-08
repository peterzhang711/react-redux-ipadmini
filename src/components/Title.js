import React, { Component } from 'react'
import '../assets/css/title.scss'
import PropTypes from 'prop-types'

class Title extends Component {
  render () {
    const { expandContent } = this.props
    return (
      <div className='top'>
        <h1>{this.props.title}</h1>
        <div>
          <div onClick= {() => expandContent()} className='top__icon'></div>
        </div>
      </div>
    )
  }
}

Title.PropTypes = {
  expandContent: PropTypes.func.isRequired
}
export default Title
