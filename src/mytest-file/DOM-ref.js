


import React, {Component} from 'react';
//���ҳ�� �Ƕ�   DOM ��   ref ���������ܿ����� console.log() ���кܶ෽��
class DomRef extends Component{
    //�����Ⱦ ��ִ��
    componentDidMount(){
        let ele2 = this.refs.content;
        console.log(ele2.textContent);
        //���кܶ෽��
        console.log( this.refs.content)


        //���������ʽû��ʵ��
        //let ele = findDOMNode(this.refs.content);
        //console.log(ele)
    }
    render(){

        return(<div ref='content'>111</div>)
    }

}

export default DomRef;