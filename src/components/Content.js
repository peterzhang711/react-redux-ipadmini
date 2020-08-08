
import React from 'react'
import '../assets/css/content.scss'
import ipadmini from '../assets/images/ipad-mini.jpg'

const Content = (props) => {
  return (
    <div className='content'>
      <img src={ipadmini} className='photo'/>
      <div className='content-text' dangerouslySetInnerHTML={{ __html: props.content?.description }} />
    </div>
  )
}

export default Content
