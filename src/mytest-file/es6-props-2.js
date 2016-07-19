import React, {Component} from 'react';

class es6Prope2 extends Component{
    constructor(e){
        super(e)
        console.log(e)   // {title: "标题aa2"}
        this.state = {
            title:''
        }
    }
    render(){
        return(<div>es6props2:{this.props.title}</div>)
    }
}

export default es6Prope2;