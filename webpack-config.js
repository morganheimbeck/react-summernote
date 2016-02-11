var path = require('path'),
    webpack = require('webpack');

var host = 'http://localhost', // default 'http://localhost'
    port = '3999', // default 3000
    config = {
        devtool: 'eval',
        debug: true,
        entry: [
            'webpack/hot/only-dev-server',
            './index.js'
        ],
        publicPath: host + ":" + port + "/static/",
        host: host, // optional
        port: port, // optional
        ip: '0.0.0.0', // optional
        output: {
            path: __dirname,
            filename: 'bundle.js',
            publicPath: host + ':' + port + '/static/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            //noParse: [],
            loaders: [{
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                //include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }],
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    };

module.exports = config;
