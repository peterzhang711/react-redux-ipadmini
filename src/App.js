import React, { Component } from 'react'
import Title from './Title'
import jsondata from './content.json'
import Foot from './foot'
import Content from './content'
import'./app.css'



class App extends Component {

    state = {
        contentlist: jsondata.content[0],
        showContent: true
    }

    rightClickChangeState = (contentindex) => {
        const {contentlist} = this.state
        fetch("./content.json")
        .then(res => res.json())
        .then(data => this.setState({contentlist:data.content[contentindex]}))
    } 

    leftClickChangeState = (contentindex) => {
        const {contentlist} = this.state
        fetch("./content.json")
        .then(res => res.json())
        .then(data => this.setState({contentlist:data.content[contentindex-1]}))
    }

    expandContent =(flag) => {
        const {showContent} = this.state
        if (flag == flag)
        // debugger
        this.setState({showContent:!showContent})
    }

    

    render() {
        const {contentlist,showContent} = this.state
        return (
        <div className='app'>
            <Title expandContent={this.expandContent}/>
            <div style={showContent? {display:'flex'} : {display:'none'}}>
            <Content contentlist={contentlist}/>
            </div>
            <Foot contentlist={contentlist}  rightClickChangeState={this.rightClickChangeState} leftClickChangeState={this.leftClickChangeState}/>
        </div>
        
        )
        
    }       
}


export default App