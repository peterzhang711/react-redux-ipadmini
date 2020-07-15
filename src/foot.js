import React, { Component } from 'react'
import './foot.css'
import  jsondata from './content.json'

// const title = jsondata.
var footindex = 1
// var contentindex = footindex-1

class Foot extends Component {

    constructor(props) {
        super(props);
        this.state = {data:[jsondata.content[footindex].title]};
        this.rightClick = this.rightClick.bind(this)
    }

    rightClick = () => { 
        const {data} = this.state
        const {contentlist, rightClickChangeState} = this.props
            fetch("./content.json")
            .then(res => res.json())
            .then(data => this.setState({data:data.content[footindex].title}))
            this.props.rightClickChangeState(footindex)
            debugger
            footindex++
            if(footindex > 3){
                footindex = 0
            }
    }

    leftClick = () => {
        const {data} = this.state
        const {contentlist, leftClickChangeState} = this.props
        // footindex--
        // var contentindex = footindex-1
        if(footindex > 1){
            fetch("./content.json")
            .then(res => res.json())
            .then(data => this.setState({data:data.content[footindex].title}))
            this.props.leftClickChangeState(footindex-1)
            footindex--
        }else{
            return
        }
    }
 
    render() {
        const {contentlist, changeState} = this.props
        const {data} = this.state
        return (
              <div className='footcontainer'>
                <div className='foot'>
                    <button onClick={this.leftClick} className='leftarrow'></button>
                    <a href='#'>Prev</a>
                </div>
                <div className='foot'>
                    <a href='#' ref={input => this.todoInput=input}>{data}</a>
                    <button onClick={this.rightClick} className='rightarrow'></button>
                </div>   
            </div>           
        )
        
    }       
}


export default Foot