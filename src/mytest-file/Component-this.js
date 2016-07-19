import React, {Component} from 'react';

//这页是 为了 看 Component 上的 this 都有哪些方法 {props: Object, context: Object, refs: Object, updater: Object, _reactInternalInstance: ReactCompositeComponentWrapper…}
class PropTypes4 extends Component{

    render(){
        console.log(this)
        return(<div>this有哪些：</div>)
    }

}

export default PropTypes4;