import React, {Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getIpadInfos, switchContentToggle } from '../redux/actions'
import Title from '../components/Title'
import Foot from '../components/foot'
import Content from '../components/content'
import'../assets/css/App.scss'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }

    componentDidMount() {
       this.props.getIpadInfos()
    }

    expandContent =() => {
       const contentToggle = this.props.contentToggle
       this.props.switchContentToggle(contentToggle)
    }
 
/* turn page over by click direction btn to change state
 * @param clickType
 * @type left/right 
 * condition init pageIndex from state/length of the content array
*/
    handlePreNext = (clickType) => {
        const {currentIndex} = this.state
        if (clickType === 'left') {
            if (currentIndex > 0) {
                this.setState({currentIndex: currentIndex-1})
            }
        }
        else if (clickType === 'right') {
            if (currentIndex < ( this.props.ipadInfos?.content?.length -1 )) {
                this.setState({currentIndex: currentIndex+1})
            }
        }
    }
 
    render() {
        const {  currentIndex } = this.state
        const { ipadInfos, contentToggle } = this.props
        return (
        <div className='app'>
            <Title expandContent={this.expandContent} title={ipadInfos.title} contentToggle={contentToggle}/>
            <div className={contentToggle? 'show' : 'hide'}>
            <Content content={ipadInfos?.content && ipadInfos?.content[currentIndex]}/>
            </div>
            <Foot currentIndex={currentIndex}  contentList={ipadInfos?.content} handlePreNext={this.handlePreNext}/>
        </div>
        )
    }      
}

const mapStateToProps = (state) => ({
    ipadInfos: state.contentReducer.ipadInfos,
    contentToggle: state.toggleReducer.contentToggle
})

const mapDispatchToProps = {
    getIpadInfos: getIpadInfos,
    switchContentToggle: switchContentToggle
}

App.PropTypes = {
    ipadInfos: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
