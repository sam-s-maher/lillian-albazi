// * as 
import Path from "path";
import Webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const config: Webpack.Configuration = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
}

export default config;