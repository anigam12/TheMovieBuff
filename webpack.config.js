const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/dist'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
plugins: [
 new HtmlWebpackPlugin({
	filename: 'index.html',
	template: './index.html'
})
]
    
};
