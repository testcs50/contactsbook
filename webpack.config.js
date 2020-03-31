const path = require('path');

module.exports = {
    entry: {main: './src/index.js'},
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}