const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    devServer: {
        open: true,
        static: path.resolve(__dirname, "../", "public")
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', "css-loader", "sass-loader", ],
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: "file-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env",
                            {
                                useBuiltIns: 'usage',
                                corejs: "2.0.0"
                            }
                        ]
                    ]
                }
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "Nowa aplikacja",
            template: "./src/templates/template.html"
        })
    ]
}