var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {            
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',        
    },
    devServer: {
        historyApiFallback: true
     },
    plugins: [
        new HtmlWebpackPlugin({
                               title: 'Hasan Mahmud',
                               filename: 'index.html',
                               template: './src/_template.html'
                             })
      ],
    devtool: "source-map",
    module: {
        rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: [/node_modules/],                
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    "@babel/preset-env",
                                    "@babel/preset-react",                                                                
                                ]
                            }
                        }
                    },

                    {
                        test: /\.(gif|png|jpe?g|svg)$/i,
                        use: [
                            'file-loader',
                            {
                            loader: 'image-webpack-loader',      
                            },
                        ],
                    },

                    {
                        test: /\.css$/,
                        use: [
                            "style-loader",
                            "css-loader"
                        ]
                    }
        ]
    }
}