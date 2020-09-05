/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
	mode: "development",
	entry: "./src/index",
	output: {
		path: path.join(__dirname, "/public/"),
		filename: "index.bundle.js"
	},
	resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				}
			},
			{
				test: /\.js(x?)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.gstyle.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.style.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							localsConvention: "camelCase",
							modules: {
								localIdentName: "[folder]_[local]__[hash:base64:5]",
							}
						}
					}
				],
			},
			{
				test: /\.(png|jpg|gif|svg|jpeg)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]"
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: "./favicon.ico",
			template: path.resolve( __dirname, 'index.html' ),
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([
			{ from: "./app.config.js" }
		], { copyUnmodified: true }),
	],
	devServer: {
		hot: true,
		open: true,
		compress: false,
		contentBase: path.join(__dirname, 'public'),
		publicPath: "/",
		historyApiFallback: true,
	},
	externals: {
		'./config': 'config'
	}
};
