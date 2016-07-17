/*
* ����һ�� webpack �����ļ�
*
*
*
* */
//
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var buildPath = path.resolve(__dirname, 'build');
function rewriteUrl(replacePath) {
    return function (req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
}

module.exports = {
    //�ҵ�����ļ�
    entry:{
        //������
        vendor:['react','react-dom'],
        //��ڵĵط�
        index:path.resolve(__dirname, 'src/index.js')
    },

    //���
    output:{

        path:path.resolve(__dirname, 'build'),
        filename:'[name].js'
    },
    //�������ļ���ʽ��
    module:{
        loaders:[
            {
                //ƥ��ĳһ���ļ�
                test:/\.js$/,
                //.js   �� 'react-hot', 'babel'  ����������
                loaders: ['babel']
            },
            {
                test:/\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }

        ]
    },

    //extension ������require����import ��ʱ��Ӽ� ��׺���Ϳ����ҵ�
    //import * as Comp from './component'   ע�� component û�м� ��׺
    resolve:{
        extensions:["", ".js", ".jsx", ".css", ".json"]
    },
    //��ӿ����߹���
    devtool: 'cheap-module-source-map',
    //���ò���
    devServer:{
        //����
        progress:true,
        //Ĭ������ֱ�ӵ��ĸ��ļ�
        contentBase:'build',
        //������ɫ
        stats:{colors:true},
        //���滻,���￪�� �Ϳ����� �����ˣ���֪��Ϊʲô
        //inline:true,

        //���Ǹ�Ŀ¼��
        //publicPath:'/static',
        hot:true,
        //���޸ĵķ���˿ں�
        port:3000,
        //����
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:3000/",
                //������ĳһ�� json �ļ�
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]
    },
    //�� ģ�� �ļ����� ������ ������:������github�� ���� html-webpack-plugins  ��  API
    plugins: [
        // ʹ�����plugin��������򵥵�һ�����ã��������Ͽɵ�github�鿴
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
        // ���� css ��ʽ�� ������� ��ϣ��hash��
        new ExtractTextPlugin("[name].css?[hash]", {
            allChunks: true,
            disable: false
        }),
        // ����ģ���ļ���
        new HtmlWebpackPlugin({
            title: 'zhufeng-react',
            template: './src/index.html'
        })
    ]

}