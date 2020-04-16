const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {            

    entry: { 
        main:"./src/index.js",        
    },
            
    output: {        
        filename: 'bundle.js',        
        path: __dirname + '/build',    
        publicPath:'/'    
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
                                {
                                    loader:'file-loader',
                                    options:{
                                         outputPath:'images',                                    
                                    },
                                },
                                {
                                    loader: 'image-webpack-loader',                                        
                                },                            
                        ],
                    },

                    {
                        test: /\.css$/,
                        use: [  
                                'style-loader',                             
                                {
                                    loader:'css-loader',
                                    options:{                                     
                                        modules:true,                                                                                
                                    }
                                },                                
                        ]                                            
                    },                   

                    {
                        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                        use: [
                          {
                            loader: 'file-loader',
                            options: {
                              name: '[name].[ext]',
                              outputPath: 'fonts'
                            }
                          }
                        ]
                    }
        ]
    }
}