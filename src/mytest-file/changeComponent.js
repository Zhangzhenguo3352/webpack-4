import React, { Component } from 'react';
//���ҳ�� ����ϰ ��� ʲô���� ����û��ʵ��
class LifeCycle extends Component {

    constructor(e){
        super(e)

        this.state = {
            value:'��ʼ��Ⱦ'
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        this.setState({
            value: nextProps.value
        });
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return <span>{this.props.value}</span>
}

componentDidMount() {
    console.log('componentDidMount');
}

componentDidUpdate(prevProps,prevState) {
    console.log('componentDidUpdate');
}

componentWillUnmount(prevProps,prevState) {
    console.log('componentWillUnmount');
}
}

export default LifeCycle;

//����������������ʾ��

import React, { Component } from 'react';
import LifeCycleDemo from './LifeCycleDemo';

class DestroyComponent extends Component {
    constructor(e){
        super(e)

        this.state = {
            value:1,
            destroyed:false
        }
    }


    increase () {
        this.setState({
    value: this.state.value + 1
});
}

destroy ()  {
    this.setState({
        destroyed: true
    });
}

render() {
    if(this.state.destroyed){
        return null;
    }

    return <div>
    <p>
    <button onClick={this.increase}>ÿ�μ�1</button>
<button onClick={this.destroy}>�ɵ���������ť</button>
</p>
<LifeCycleDemo value={this.state.value}/>
</div>;
}
}

export default DestroyComponent;
