import React, {Component} from 'react';


// 这节对 props练习  (es6)

class PropsState2 extends Component {



    constructor(){
        super();
        {console.log(this)}
        this.state = {
            setNumber:2
        }

    }

    //组件真实 渲染到 浏览器
    //state = {setNumber:0}



render(){
    return(
        <div>练习从 props 传递过来的 被 state 处理的方法，组件
    <p>模仿父组件的数据传过来的 ： {this.props.status}</p>
        <p>数据 ： {this.props.status}</p>
    </div>
)
}
}

// 这节对 props练习
PropsState2.defaultProps = {status:'第一种：初始化的props的设置'};

export default PropsState2;