import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import GetComponent from './mytest-file/index';
import StateDemo from './mytest-file/prac';
import PropsDom from './mytest-file/props-dom';
import Es5Props from './mytest-file/es5-props';
import Es6Props2 from './mytest-file/es6-props-2';
import PropTypes from './mytest-file/propTypes';
import ComponentThis from './mytest-file/Component-this';
import DomRef from './mytest-file/DOM-ref';
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
                <PropsDom/>
                <Es5Props/>
                <Es6Props2 title='第二种，调用组件的时候传递props'/>
                <PropTypes data = {true}/>
                <ComponentThis/>
                <DomRef/>
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