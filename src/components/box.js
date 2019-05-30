import React from "react";



export default class Box extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:1
        }
    }
   
    componentWillUpdate(nextProps,nextState){
        if(this.props.data === 10 && nextProps.data === 3){
            this.setState({data: 'xxxxxxxxxxxxxxxxxxxxxxx'})
            
        }
    }
    
    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}