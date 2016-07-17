import React, {Component} from 'react';

class GetOut extends Component{

    render(){
        var MyStyle = {
            color:'#399',
            fontSize:'20px'
        };
        return(
            <div style={MyStyle}>从组件过来的文字</div>
    )
    }
}

export default GetOut;