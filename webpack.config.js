var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {            
    entry: { 
        main:"./src/index.js",        
    },
            
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',        
    },
    devServer: {
        historyApiFallback: true,
        host:'0.0.0.0',
        port:8080
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
                    },

                    

                    {
                        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                        use: [
                          {
                            loader: 'file-loader',
                            options: {
                              name: '[name].[ext]',
                              outputPath: 'fonts/'
                            }
                          }
                        ]
                    }
        ]
    }
}