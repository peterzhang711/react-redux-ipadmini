import React, { Component } from 'react'
import '../assets/css/foot.scss'
import PropTypes from 'prop-types'

class Foot extends Component {
  render () {
    const {  currentIndex, contentList, handlePreNext } = this.props
    const lengthOfContent = contentList?.length
    return (
      <div className='footcontainer'>
        <div className='foot'>
          <button onClick={() => handlePreNext('left')} className='leftarrow'></button>
          <a href='#' onClick={() => handlePreNext('left')}>
            {
              (currentIndex === 0)
                ? 'Prev'
                : contentList[currentIndex - 1].title
            }
          </a>
        </div>
        <div className='foot'>

          <a href='#' onClick={() => handlePreNext('right')}>
            {
              (contentList && currentIndex === (lengthOfContent - 1))
                ? 'Next'
                : contentList && contentList[currentIndex + 1].title
            }
          </a>
          <button onClick={() => handlePreNext('right')} className='rightarrow'></button>
        </div>
      </div>
    )
  }
}

Foot.PropTypes = {
  currentIndex: PropTypes.number.isRequired,
  contentList: PropTypes.array.isRequired,
  handlePreNext: PropTypes.func.isRequired
}

export default Foot
