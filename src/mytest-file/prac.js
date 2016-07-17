import React, {Component} from 'react';

class PracState extends Component {

    // state 可以写在 constructor(){}
    constructor(){
        super();
        this.state = {
            setNumber:0
        }
    }

    //组件真实 渲染到 浏览器
    //state = {setNumber:0}
    changeTime(){

    this.setState({setNumber:this.state.setNumber+1})
    }
    componentDidMount(){
    this.tiemr = setInterval(this.changeTime,1000)
    };

    //渲染完成 以后执行
    ComponentWillUnmount(){
        clearInterval(this.timer)
    };
    render(){
        return(
            <div>练习从 props 传递过来的 被 state 处理的方法，组件
                <p>事件 加加加 {this.state.setNumber}</p>
            </div>
        )
    }
}

export default PracState;