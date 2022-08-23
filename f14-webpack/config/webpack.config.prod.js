const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/[contenthash:6].[name]-index.js',
        path: path.resolve(__dirname, '../', 'build')
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", ],
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: '[name][contenthash:6].[ext]',
                            outputPath: 'images',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 70,
                                progressive: true
                            }
                        }
                    }

                ]
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
        new CopyPlugin({
                patterns: [{
                    from: 'public/images',
                    to: 'images'
                }]
            }

        )
    ]
}