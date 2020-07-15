import React, { Component } from 'react'
import  jsondata from './content.json'
import './title.css'


var flag = true
class Title extends Component {

    handleClick = () => {
        const{expandContent} = this.props
        expandContent(flag)
        flag = !flag
    }

    
    render(){
            const{expandContent} = this.props
        return (
            <div className='top'>
              <div>
                <div className='logo'></div>
              </div>
              <h1>{jsondata.title}</h1>
              <div>
                  <div onClick= {this.handleClick} className='title-icon'></div>
              </div>
            </div>
        )
    }   
}

export default Title
