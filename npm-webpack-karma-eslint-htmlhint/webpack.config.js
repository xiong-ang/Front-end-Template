
//HTML webpack plugin 
const HtmlWebpackPlugin = require('html-webpack-plugin');

//CSS webpack plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,                     //Context
    entry: __dirname+"/src/app.js",         //Entry：Should include all js and css            
    output: {                               //Output: path file publicpath
        path: __dirname+"/dist/",           
        filename: "bundle-[hash].js"        //[name] [hash] [chunkhash]
    },
    devtool: 'cheap-module-eval-source-map',//source map for development
    // devtool: 'cheap-module-source-map',//source map for product
    devServer: {                            //web-dev-server config
        contentBase: __dirname+"/dist", 
        port:9090,             
        inline: true,                       //iframe  ---embed in ifram; inline  ---bundle server entry in bundle
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                //css-loader Process url; style-loader insert css to style
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
},
    plugins: [
        //HTML Webpack
        new HtmlWebpackPlugin({
            template:__dirname+"/src/index.html"
        }),
        //Extract css from entry file and save to specialed file
        new ExtractTextPlugin("style-[hash].css")
    ]
};