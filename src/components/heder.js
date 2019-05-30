import React from "react";
import Box from './box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            val: 20
        }
    }
    // happens in the first time that the component is renderd!
    componentWillMount() {
        // console.log(1, 'componentWillMount')
    }
    //after component was mounted -> this function is calld, and only then the component is renderd. 
    componentDidMount() {
        // console.log(1.5, 'componentDidMount')
    }
    // happens only if state hase changed or props has changed!
    componentWillUpdate(nextProps, nextState) {
        // console.log(2 , 'componentWillUpdate')

    }
    //  happens after componentWillUpdate -> this function is calld, and only then the component is renderd.  
    componentDidUpdate(prevProps, prevState) {
        // console.log(3, 'componentDidUpdate')

    }
    // when a component is gone from the dom. 
    componentWillUnmount() {
        console.log(4)
    }
    // no need for binding with arrow function
    changeTab = (tab) => {
        this.setState({ tab: tab + 1 }, () => {
            //set state callback
            console.log('after setState', this.state.tab)
        })
        console.log('before setState', this.state.tab)
    }
    showTab = () => {
        return (
            <h2>{this.state.tab}</h2>
        )
    }
    handleChange = (event, newValue) => {
        this.setState({val:newValue})
    }

    render() {
        return (
            <div>
                <Tabs value={this.state.val} onChange={this.handleChange}>
                    <Tab label="Item One" value={10} />
                    <Tab label="Item Two" value={20}/>
                    <Tab label="Item Three" value={30} disabled={true}/>
                </Tabs>
                {this.state.val === 10 ?
                <div>
                    <h1 onClick={() => { this.changeTab(this.state.tab) }}>orly</h1>
                    <h1 onClick={() => { this.changeTab(2) }}>faf</h1>
                    {this.showTab()}
                    <Box data={this.state.tab} />
                </div>
                :
                <div>
                    fafaf
                </div>
                }
            </div>
        )
    }
}