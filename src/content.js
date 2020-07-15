
import React, { Component } from 'react'
import './content.css'
import ipadmini from './ipad-mini.jpg'


class Content extends Component {

      constructor(props){
          super(props)
          this.state = {users: []}
      }           


    render() {
        const {contentlist} = this.props
        return (
            <div className='content'>
               {contentlist.thumbnail ? <img src={ipadmini} className='photo'/> : null }
                <span>{contentlist.description}</span>
            </div>
        )
        
    }       
}


export default Content