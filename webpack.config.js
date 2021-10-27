const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/**
 * by default webpack is not able to transpile html files from src to dist,
 * hence a config file has to be created:
 */

module.exports = {
    mode: 'development',
    output: {
        assetModuleFilename: '[name].[ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader : "html-loader",
                        options : {minimize: true}
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader : "babel-loader",
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],

}