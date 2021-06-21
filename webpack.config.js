const path = require('path');

module.exports = {
    entry: "./src/app.js", //entry point
    output: {
        path: path.join(__dirname, "./public"), //file to be saved to
        filename: 'bundle.js' //filename to which babel runs and saves the output
    },
    module: {
        rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "./public"),
        historyApiFallback:true
    }
};