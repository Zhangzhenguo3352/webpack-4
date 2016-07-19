


import React, {Component} from 'react';
//这个页面 是对   DOM 中   ref 操作，还能看到它 console.log() 中有很多方法
class DomRef extends Component{
    //组件渲染 完执行
    componentDidMount(){
        let ele2 = this.refs.content;
        console.log(ele2.textContent);
        //中有很多方法
        console.log( this.refs.content)


        //下面这个方式没有实现
        //let ele = findDOMNode(this.refs.content);
        //console.log(ele)
    }
    render(){

        return(<div ref='content'>111</div>)
    }

}

export default DomRef;