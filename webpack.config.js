/*
* 配置一个 webpack 配置文件
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
    //我的入口文件
    entry:'./src/index.js',

    //输出
    output:{
        path:'./build',
        filename:'buildes.js'
    },
    //解析的文件格式有
    module:{
        loaders:[
            {
                //匹配某一类文件
                test:/\.js$/,
                //加载时 babel ,如果是多个，一定要带 s ,还要带上[], loaders:['xxx,xxx']
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
            //图标字体 配置  下载 npm install file-loader 或 url-loader --save-dev
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    //对 模板 文件解析 ，解析 ，建议:可以在github中 查找 html-webpack-plugins  看  API
    plugins: [
        // 使用这个plugin，这是最简单的一个配置，更多资料可到github查看
        new HtmlWebpackPlugin({
            title: 'zhufeng-react',
            template: './src/index.html',
        })
    ],
    //extension 不用在require或是import 的时候加件 后缀，就可以找到
    //import * as Comp from './component'   注意 component 没有加 后缀
    resolve:{
        extensions:["", ".js", ".jsx", ".css", ".json"]
    },
    //添加开发者工具
    devtool: 'cheap-module-source-map',
    //配置参数
    devServer:{
        //进度
        progress:true,
        //默认上来直接到哪个文件
        contentBase:'build',
        //配置颜色
        stats:{colors:true},
        //热替换,这里开启 就看不见 内容了，不知道为什么
        //inline:true,
        //在那个目录下
        //publicPath:'/static',
        hot:true,
        //可修改的服务端口号
        port:8080,
        //配置
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:8080/",
                //解析到某一个 json 文件
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]

}