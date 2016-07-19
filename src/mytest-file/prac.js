import React, {Component} from 'react';

class PracState extends Component {

    // state 可以写在 constructor(){}

    constructor(){
        super();
        {console.log(this)}
        this.state = {
            setNumber:2
        }

    }

    //组件真实 渲染到 浏览器
    render(){
        return(
            <div>练习从 props 传递过来的 被 state 处理的方法，组件
                <p>事件 加加加 {this.state.setNumber}</p>
            </div>
        )
    }
}

export default PracState;