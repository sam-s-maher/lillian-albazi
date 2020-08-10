// * as 
import Path from "path";
import Webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html"
});

const config: Webpack.Configuration = {
    mode: "development",
    entry: "./src/index.tsx",
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ],
        alias: {
            components: Path.resolve(__dirname, "./src/components/"),
            styles: Path.resolve(__dirname, "./src/styles/"),
            images: Path.resolve(__dirname, "./rsc/images/")
        }
    },
    module: {
        rules: [
            { 
                test: /\.tsx$/,
                loader: "awesome-typescript-loader"
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }, {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
}

export default config;