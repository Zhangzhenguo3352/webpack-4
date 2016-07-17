import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import GetComponent from './mytest-file/index';
import StateDemo from './mytest-file/prac.js';
class MyStyle extends Component {
    render(){
        var MyComponentStyle = {
            color:'red'
        };
        return(
            <div style={MyComponentStyle}>
                zhang，
                文字添加颜色,<GetComponent/> 这点文字是从：
                {this.props.aaa} ==和 {this.props.bbb} 还用 {this.props.ccc}
                <StateDemo/>
            </div>
        )
    }
}
const obj = {
    aaa:111,
    bbb:2222,
    ccc:3333
};


render(<MyStyle {...obj}/>,document.getElementById('app'));