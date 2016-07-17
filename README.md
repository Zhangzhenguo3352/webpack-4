1��github �½�һ���ֿ�<br>
2������ ����  git clone xxxx<br>
3��git init    ��ʼ�� package.json<br>
4��touch .gitignore README.md   ���������ı����� ˵���ı�<br>
5��mkdir src build  ���������ļ��� src��ʼ���ļ��� �� build�������ļ���<br>
6���� src �ļ�����    touch index.js component.js  ����index.js ��  component.js<br>
7���� build �ļ�����    touch index.html  ����index.html<br>
8��npm install webpack -g --save-dev    �ҷ��ֱ���ȫ�ְ�װ<br>
9��touch webpack.config.js         webpack �õĻ�Ҳ��Ҫ����һ�������ļ���<br>
10��package.json  ������ ���� npm run build ���<br>
"scripts": {
<br>
  "test": "echo \"Error: no test specified\" && exit 1",
  <br>
  "build":"webpack"
  <br>
},
11��û���� package.json �����ã����� webpack ������<br>
12��npm install webpack-dev-server --save-dev   ����ʹ���ԣ�������Щ<br>
13���������� �޸��˾����� ������� -w ��--watch �ļ�д��<br>
"scripts": {
<br>
  "test": "echo \"Error: no test specified\" && exit 1",
  <br>
  "build": "webpack -w"
  <br>
},
14��webpack --help ��webpack ������Щ����<br>
          webpack --progess --colors   ��� ���ֽ��� �� ��ɫ����
          <br>
          webpack --display-error-details   ��� ���ִ��� λ��������
<br>

15���ܹ������ȸ��� 8080 �˿� package.json д�����Է���  http://localhost:8080<br>
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1",<br>
  "build": "webpack -w --display-error-details --colors",<br>
  "dev":"webpack-dev-server"<br>
},<br>
     ����ָ�� ��Ĭ�Ϸ��ʶ˿ڽ����Ǹ��ļ����������� --content-base build ,Ĭ��ָ�� build �ļ���<br>
     
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1",<br>
  "build": "webpack -w --display-error-details --colors",<br>
  "dev":"webpack-dev-server --content-base build"<br>
},<br>
     ��Ҳ�в���<br>
     
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1",<br>
  "build": "webpack -w --display-error-details --colors",<br>
  "dev":"webpack-dev-server --content-base build --colors"<br>
},<br>
16���޸��ļ��� package.json ʱ Ҫ��ʹ�ã�npm run build Ȼ���������ȸ��� npm run dev <br>
17����ҳ�棬���֧��webpackҲ���Դ������Ҫ�޸� webpack.config.js
<br>
module.exports = {<br>
    //�ҵ�����ļ�<br>
    entry:{<br>
        index:'./src/index.js',<br>
        com:'./src/component.js'<br>
    },<br>
    //���
    output:{<br>
        path:'./build',<br>
        filename:'[name].js'<br>
    }<br>
}<br>
<br>
18��react  ��صĲ��<br>
          npm install react react-dom -save   ��װ react �� react-dom
          <br>
19�� babel ��صĲ��<br>
<br>
     npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
     <br>
20��babel ��Ҫһ�� Ԥ�� �ļ�  .babelrc �ı��ļ�<br>
     <br>
     touch .babelrc
     <br>
21��.babelrc ��ص�����<br>
          �ļ����ݣ�
          <br>


{<br>
    "presets":["es2015","react"]
}<br>
<br>
22��webpack.config.json ��ص�����<br>

/*
* ����һ�� webpack �����ļ�<br>
*
*
*
* */

module.exports = {<br>
    //�ҵ�����ļ�<br>
    entry:'./src/index.js',<br>

    //���<br>
    output:{<br>
        path:'./build',<br>
        filename:'buildes.js'<br>
    },
    //�������ļ���ʽ��<br>
    module:{<br>
        loaders:[<br>
            {
                //ƥ��ĳһ���ļ�<br>
                test:/\.js[x]$/,<br>
                //����ʱ babel ,����Ƕ����һ��Ҫ�� s ,��Ҫ����[], loaders:['xxx,xxx']<br>
                loader:'babel',<br>
                //�����ʱ�������Щ��Դ exclude<br>
                exclude:'/node_modules/'<br>

            }<br>
        ]<br>
    }<br>
}<br>
23��Ϊ��ģ�����ݣ�ҲΪ�ˣ�ͨ����ͬ�ķ�ʽ�������ݣ���Ҫ�� webpack.config.js ��<br>

/*<br>
* ����һ�� webpack �����ļ�<br>
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
    //�ҵ�����ļ�<br>
    entry:'./src/index.js',<br>

    //���<br>
    output:{<br>
        path:'./build',
        filename:'buildes.js'<br>
    },<br>
    //�������ļ���ʽ��
    module:{<br>
        loaders:[<br>
            {<br>
                //ƥ��ĳһ���ļ�<br>
                test:/\.js$/,<br>
                //����ʱ babel ,����Ƕ����һ��Ҫ�� s ,��Ҫ����[], loaders:['xxx,xxx']<br>
                loader:'babel'<br>
            }<br>
        ]<br>
    },<br>
    //���ò���<br>
    devServer:{<br>
        //����<br>
        progress:true,<br><br>
        //Ĭ������ֱ�ӵ��ĸ��ļ�<br>
        contentBase:'build',<br>
        //������ɫ<br>
        stats:{colors:true},<br>
        //���滻<br>
        inline:true,<br>
        //���Ǹ�Ŀ¼��<br>
        //publicPath:'/static',<br>
        hot:true,<br>
        //�޸ķ���˿ں�<br>
        port:8080,<br>
        //����<br>
        proxy: [<br>
            {<br>
                path: /^\/api\/(.*)/,<br>
                target: "http://localhost:8080/",<br>
                //������ĳһ�� json �ļ�<br>
                rewrite: rewriteUrl('/$1\.json'),<br>
                changeOrigin: true<br>
            }<br>
        ]<br>
    }<br>
}
         build�ļ��� �� test.json �ļ������� ���������� Ҫ д   http://localhost:8080/test.json<br>
                              ������ת���� ������ ͨ����ͬ·������ ����·�� �� http://localhost:8080/api/test  �Ϳ����õ�����
24��������ʽ������ �ļ�<br>
     npm install css-loader style-loader less-loader sass-loader --save-dev
     <br>
25�� devtool �� webpack.config.json �� ����  devtool: 'cheap-module-source-map'  ���� �ڿ���̨�У�ֱ�Ӵ�ϵ�

/*
* ����һ�� webpack �����ļ�
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
                loader:'style!css'
            },
            {
                test:/\.less/,
                loader:'style!css!less'
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
        //���滻
        inline:true,
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
    }
}



26��http://localhost:8080/webpack-dev-server/    ��� webpack-dev-server/   ���� ���Զ�ˢ�� ��
27��������ʱ�� build �ļ� ɾ�� ԭ���� �� build ���� ��ʱ�����������ԭ��
     ����1�� $ npm install --save-dev html-webpack-plugin

          2��webpack.config.js �� �����˴��� ģ�� �ļ��ķ���
               - 1��var HtmlWebpackPlugin = require('html-webpack-plugin');
               - 2��
plugins: [
    // ʹ�����plugin��������򵥵�һ�����ã��������Ͽɵ�github�鿴
    new HtmlWebpackPlugin({
        title: 'zhufeng-react',
        template: './src/index.html',
    })
],
           �������λ�ã����Կ�һ��

/*<br>
* ����һ�� webpack �����ļ�<br>
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
    //�ҵ�����ļ�<br>
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
                loader:'style!css'
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
    }
}
          3��npm run build
               npm run dev

28����ʵ���� css ��������   4 ��  ���� webpack.config.json   �����൱�ڣ�����ʹ�õ�  link ��ʽ����<br>
<br>
     1�� $ npm install extract-text-webpack-plugin --save-dev
     <br>
     2�� var ExtractTextPlugin = require("extract-text-webpack-plugin");
     <br>
     3�� { test: /\.css/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
     <br>
     4�� plugins: [<br>
               new webpack.HotModuleReplacementPlugin(),<br>
               new webpack.NoErrorsPlugin(),<br>
               new ExtractTextPlugin("bundle.css")<br>
               ]<br>
29��

































