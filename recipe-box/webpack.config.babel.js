'use strict';
const DEBUG = !process.argv.includes('--release');
import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import inlineSvg from 'postcss-inline-svg';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

module.exports = {
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'app.js'
    },

    devtool: DEBUG ? 'inline-source-map' : null,

    watch: DEBUG,

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.scss', '.json','.jsx']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        ...DEBUG ? [
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                server: {baseDir: ['dist']}
            })
        ] : []
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!postcss!sass-loader?outputStyle=expanded'
                )
            },
            {
                test: /\.(ttf|eot|woff|svg|png|jpg)/,
                loader: 'url?limit=8000&name=./assets/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css?modules!postcss!'
                )
            },
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        }),
        inlineSvg()
    ]
};