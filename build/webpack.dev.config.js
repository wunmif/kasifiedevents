const base = require("./webpack.base.config")
const merge = require("webpack-merge")
const webpack = require("webpack")
const config = require('.././config/dev.config')

module.exports = merge(base, {
  // This contains additional production settings
  plugins: [
    new webpack.DefinePlugin({
      "process": {
        env: config
      }
    })
  ],
  devServer: {
    port: 9393,
    host: "0.0.0.0",
    overlay: true,
    disableHostCheck: true,
	proxy : {
		'/api/*': { "secure": false, "changeOrigin": true, "target": "https://shop.eplaza.cloud/" },
           	'/images/*': { "secure": false, "changeOrigin": true, "target": "https://shop.eplaza.cloud/" },
		'/files/*': { "secure": false, "changeOrigin": true, "target": "https://shop.eplaza.cloud/" }
            	// '/api/*': 'http://192.168.0.100:5454',
            	// '/images/*': 'http://192.168.0.100:5454',
            	// '/files/*': 'http://192.168.0.100:5454'
	}
  }

})
