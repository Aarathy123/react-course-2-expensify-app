const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env == 'production';
    const CSSExtract = new ExtractTextPlugin('style.css');
    return {
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
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins:[
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "./public"),
            historyApiFallback: true
        }
    }
};