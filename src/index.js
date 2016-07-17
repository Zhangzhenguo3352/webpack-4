import React, {Component} from 'react';
import {render} from 'react-dom';

//拿到 component.js 数据，通过extensions 的省略 后缀的方式，都可以实现
import * as Comp from './component';

console.log(Comp)
class App extends Component {
    render(){
        return (
            <div><div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1aa</div>
            <div>12222</div>
            <div>1</div>asas
            <div>1加快建设11111212的daas经费上看到看见啥快递就爱上烧烤鸡蛋</div>
            <div>1</div>
            </div>
    )
    }
}

render(<App/>,document.getElementById('app'));