import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',

    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dst/'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: "./dst",
        color: true,
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
    },
};
