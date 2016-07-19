var React = require('react');

//es5 的写法 props
var CertificateConnect = React.createClass({
        getDefaultProps:function(){
            return {
                status:'es5 getDefaultProps:function(){}'
            }
        },
        render: function() {
            return(
                <div>{this.props.status}</div>
            )
        }

});

module.exports = CertificateConnect;
