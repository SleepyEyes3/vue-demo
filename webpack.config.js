const path = require('path')
const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行



module.exports = {
  entry:path.join(__dirname,"./src/main.js"),
  output:{
    path:path.join(__dirname,"./dist"),
    filename:'bundle.js'
  },
  plugins:[ // 特点：1. 都是需要new一个对象 2. 对象都是以plugin结尾的
    // hot 
    new webpack.HotModuleReplacementPlugin(),
    // 在"内存"中创建一个index.html文件
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html',
    }),
    //new一个vue laoder plugin的实例
    new VueLoaderPlugin(), 
  ],
  module:{
    rules:[// 所有第三方模块的匹配规则
      {test:/\.css$/,use:['style-loader','css-loader']} ,//匹配.css结尾的文件，并使用指定的第三方loader进行处理
                      //这边的的处理器的加载是从左向右的，一定要注意顺序
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=false&name=[hash:8]-[name].[ext]'},  
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},// 配置babel来转化高级的es语法
      // 这边需要将node_modules排除，否则，babel会将其中的所有的js文件打包编译
      {test:/\.vue$/,use:'vue-loader'},
    ]
  },
  resolve:{
    alias:{
        'vue$':'vue/dist/vue.js'
    }
  },
}

//需要安装两套包来解析ES6语法
// 在webpack中，可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能
// cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// cnpm i babel-preset-env babel-preset-stage-0 -D 
// 下面是babel8的：详细参考 https://www.cnblogs.com/ldq678/p/10448374.html
// cnpm i '@babel/core' '@babel/plugin-proposal-class-properties' '@babel/plugin-transform-runtime' '@babel/preset-env' '@babel/runtime' babel-loader -D

// 配置的参数也不一样了
// {
//   　"presets": ["@babel/preset-env"],
//   　"plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
//  }