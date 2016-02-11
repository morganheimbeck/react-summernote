var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-config');

var host = config.host || 'localhost';
var port = config.port || 3000;
var ip = config.ip || 'localhost';

module.exports = {
	startServer: function() {
		new WebpackDevServer(webpack(config), {
			publicPath: config.output.publicPath,
			stats: {colors: true},
			hot: true,
			historyApiFallback: true,
		}).listen(port, ip, function (err, result) {
			if(err) throw new gutil.PluginError("webpack-dev-server", err);
			gutil.log('Listening at ' + host +' Port ' + port);
		});
	}
}
