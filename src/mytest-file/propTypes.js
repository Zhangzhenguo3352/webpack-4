import React, {Component,PropTypes} from 'react';

//这页是 为了 效验 propTypes 的属性值得类型，效验可提升开发者体验，用于约定统一的接口规范
class PropTypes3 extends Component{

    render(){
        return(<div>布尔类型：{this.props.data}</div>)
    }

}
PropTypes3.propType = {data:React.PropTypes.string}
export default PropTypes3;