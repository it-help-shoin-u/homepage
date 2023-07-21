const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack")

const env = dotenv.config().parsed;

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "./main.js"
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "dist/")
        },
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            favicon: path.resolve(__dirname, "src/favicon.ico"),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        })
    ]
};