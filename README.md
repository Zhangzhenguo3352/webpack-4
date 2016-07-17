1，github 新建一个仓库<br>
2，下载 下来  git clone xxxx<br>
3，git init    初始化 package.json<br>
4，touch .gitignore README.md   创建隐藏文本，和 说明文本<br>
5，mkdir src build  创建两个文件夹 src初始化文件夹 和 build编译后的文件夹<br>
6，在 src 文件夹中    touch index.js component.js  创建index.js 和  component.js<br>
7，在 build 文件夹中    touch index.html  创建index.html<br>
8，npm install webpack -g --save-dev    我发现必须全局安装<br>
9，touch webpack.config.js         webpack 用的话也需要，建一个配置文件。<br>
10，package.json  里配置 利用 npm run build 打包<br>
"scripts": {
<br>
  "test": "echo \"Error: no test specified\" && exit 1",
  <br>
  "build":"webpack"
  <br>
},
11，没有在 package.json 里配置，利用 webpack 命令打包<br>
12，npm install webpack-dev-server --save-dev   可以使调试，更方便些<br>
13，持续监听 修改了就马上 打包出来 -w （--watch 的简写）<br>
"scripts": {
<br>
  "test": "echo \"Error: no test specified\" && exit 1",
  <br>
  "build": "webpack -w"
  <br>
},
14，webpack --help 看webpack 中有哪些命令<br>
          webpack --progess --colors   打包 显现进度 和 颜色区分
          <br>
          webpack --display-error-details   打包 显现错误 位置在哪行
<br>

15，能够启动热更新 8080 端口 package.json 写，可以访问  http://localhost:8080<br>
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1",<br>
  "build": "webpack -w --display-error-details --colors",<br>
  "dev":"webpack-dev-server"<br>
},<br>
     可以指定 ，默认访问端口进入那个文件，可以这样 --content-base build ,默认指向 build 文件夹<br>
     
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1",<br>
  "build": "webpack -w --display-error-details --colors",<br>
  "dev":"webpack-dev-server --content-base build"<br>
},<br>
     它也有参数<br>
     
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1",<br>
  "build": "webpack -w --display-error-details --colors",<br>
  "dev":"webpack-dev-server --content-base build --colors"<br>
},<br>
16，修改文件的 package.json 时 要先使用，npm run build 然后在启动热更新 npm run dev <br>
17，多页面，多分支，webpack也可以打包，需要修改 webpack.config.js
<br>
module.exports = {<br>
    //我的入口文件<br>
    entry:{<br>
        index:'./src/index.js',<br>
        com:'./src/component.js'<br>
    },<br>
    //输出
    output:{<br>
        path:'./build',<br>
        filename:'[name].js'<br>
    }<br>
}<br>
<br>
18，react  相关的插件<br>
          npm install react react-dom -save   安装 react 和 react-dom
          <br>
19， babel 相关的插件<br>
<br>
     npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
     <br>
20，babel 需要一个 预设 文件  .babelrc 文本文件<br>
     <br>
     touch .babelrc
     <br>
21，.babelrc 相关的配置<br>
          文件内容：
          <br>


{<br>
    "presets":["es2015","react"]
}<br>
<br>
22，webpack.config.json 相关的配置<br>

/*
* 配置一个 webpack 配置文件<br>
*
*
*
* */

module.exports = {<br>
    //我的入口文件<br>
    entry:'./src/index.js',<br>

    //输出<br>
    output:{<br>
        path:'./build',<br>
        filename:'buildes.js'<br>
    },
    //解析的文件格式有<br>
    module:{<br>
        loaders:[<br>
            {
                //匹配某一类文件<br>
                test:/\.js[x]$/,<br>
                //加载时 babel ,如果是多个，一定要带 s ,还要带上[], loaders:['xxx,xxx']<br>
                loader:'babel',<br>
                //编译的时候忽略哪些资源 exclude<br>
                exclude:'/node_modules/'<br>

            }<br>
        ]<br>
    }<br>
}<br>
23，为了模拟数据，也为了，通过不同的方式访问数据，需要在 webpack.config.js 中<br>

/*<br>
* 配置一个 webpack 配置文件<br>
*<br>
*
*
* */
//
function rewriteUrl(replacePath) {<br>
    return function (req, opt) {<br>
        var queryIndex = req.url.indexOf('?');<br>
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";<br>

        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };<br>
}<br>

module.exports = {<br>
    //我的入口文件<br>
    entry:'./src/index.js',<br>

    //输出<br>
    output:{<br>
        path:'./build',
        filename:'buildes.js'<br>
    },<br>
    //解析的文件格式有
    module:{<br>
        loaders:[<br>
            {<br>
                //匹配某一类文件<br>
                test:/\.js$/,<br>
                //加载时 babel ,如果是多个，一定要带 s ,还要带上[], loaders:['xxx,xxx']<br>
                loader:'babel'<br>
            }<br>
        ]<br>
    },<br>
    //配置参数<br>
    devServer:{<br>
        //进度<br>
        progress:true,<br><br>
        //默认上来直接到哪个文件<br>
        contentBase:'build',<br>
        //配置颜色<br>
        stats:{colors:true},<br>
        //热替换<br>
        inline:true,<br>
        //在那个目录下<br>
        //publicPath:'/static',<br>
        hot:true,<br>
        //修改服务端口号<br>
        port:8080,<br>
        //配置<br>
        proxy: [<br>
            {<br>
                path: /^\/api\/(.*)/,<br>
                target: "http://localhost:8080/",<br>
                //解析到某一个 json 文件<br>
                rewrite: rewriteUrl('/$1\.json'),<br>
                changeOrigin: true<br>
            }<br>
        ]<br>
    }<br>
}
         build文件中 有 test.json 文件的数据 ，正常访问 要 写   http://localhost:8080/test.json<br>
                              而经过转换后 ，可以 通过不同路径访问 访问路径 是 http://localhost:8080/api/test  就可以拿到数据
24，解析样式。。。 文件<br>
     npm install css-loader style-loader less-loader sass-loader --save-dev
     <br>
25， devtool 在 webpack.config.json 中 配置  devtool: 'cheap-module-source-map'  可以 在控制台中，直接打断点

/*
* 配置一个 webpack 配置文件
*
*
*
* */
//


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
                loader:'style!css'
            },
            {
                test:/\.less/,
                loader:'style!css!less'
            }
        ]
    },
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
        //热替换
        inline:true,
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
    }
}



26，http://localhost:8080/webpack-dev-server/    添加 webpack-dev-server/   更新 （自动刷新 ）
27，可以随时把 build 文件 删除 原因是 你 build 可以 随时创建，下面的原因
     下载1， $ npm install --save-dev html-webpack-plugin

          2，webpack.config.js 中 配置了创建 模板 文件的方法
               - 1。var HtmlWebpackPlugin = require('html-webpack-plugin');
               - 2。
plugins: [
    // 使用这个plugin，这是最简单的一个配置，更多资料可到github查看
    new HtmlWebpackPlugin({
        title: 'zhufeng-react',
        template: './src/index.html',
    })
],
           整体代码位置，可以看一下

/*<br>
* 配置一个 webpack 配置文件<br>
*
*
*
* */
//

var HtmlWebpackPlugin = require('html-webpack-plugin');<br>
function rewriteUrl(replacePath) {<br>
    return function (req, opt) {<br>
        var queryIndex = req.url.indexOf('?');<br>
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";<br>

        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
}

module.exports = {<br>
    //我的入口文件<br>
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
                loader:'style!css'
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
    }
}
          3，npm run build
               npm run dev

28，真实环境 css 单独加载   4 步  ，在 webpack.config.json   ，它相当于，我们使用的  link 方式加载<br>
<br>
     1， $ npm install extract-text-webpack-plugin --save-dev
     <br>
     2， var ExtractTextPlugin = require("extract-text-webpack-plugin");
     <br>
     3， { test: /\.css/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
     <br>
     4， plugins: [<br>
               new webpack.HotModuleReplacementPlugin(),<br>
               new webpack.NoErrorsPlugin(),<br>
               new ExtractTextPlugin("bundle.css")<br>
               ]<br>
29，

































