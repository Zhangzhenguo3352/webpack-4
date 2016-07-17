/*
* ����һ�� webpack �����ļ�
*
*
*
* */
//

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    entry:'./src/index.js',

    //���
    output:{
        path:'./build',
        filename:'buildes.js'
    },
    //�������ļ���ʽ��
    module:{
        loaders:[
            {
                //ƥ��ĳһ���ļ�
                test:/\.js$/,
                //����ʱ babel ,����Ƕ����һ��Ҫ�� s ,��Ҫ����[], loaders:['xxx,xxx']
                loader:'babel',
            },
            {
                test:/\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test:/\.less/,
                loader:'style!css!less'
            },
            //ͼ������ ����  ���� npm install file-loader �� url-loader --save-dev
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    //�� ģ�� �ļ����� ������ ������:������github�� ���� html-webpack-plugins  ��  API
    plugins: [
        // ʹ�����plugin��������򵥵�һ�����ã��������Ͽɵ�github�鿴
        new HtmlWebpackPlugin({
            title: 'zhufeng-react',
            template: './src/index.html',
        })
    ],
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
        port:8080,
        //����
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:8080/",
                //������ĳһ�� json �ļ�
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]

}