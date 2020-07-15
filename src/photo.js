import React, { Component } from 'react'
import './photo.css'
import jsondata from './content.json'
import ipadmini from './ipad-mini.jpg'


class Photo extends Component {
    render() {
        const {photo} = this.props
        return (
         
                 <img src={ipadmini} className='photo'/>
        
        )
        
    }       
}


export default Photo