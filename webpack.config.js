const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',  // or 'production' when ready
    entry: './src/index.js',
    output: {
        filename: 'popup.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',  // <-- Replace eval() with this
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/popup.html',
            filename: 'popup.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/manifest.json', to: '' },
                { from: 'public/icons', to: 'icons' },
                { from: 'src/background.js', to: '' },
                { from: 'public/Steffen Hogan - Resume.pdf', to: '' }
            ],
        }),
    ],
};
