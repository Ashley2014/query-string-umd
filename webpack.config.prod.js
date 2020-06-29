const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    resolve: {
      mainFields: ['browser', 'module', 'main']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        library: 'queryString',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                include: /(node_modules|bower_components|dist)/,
                exclude: /dfefegfe/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ],
    },
};
