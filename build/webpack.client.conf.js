const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("./webpack.base.conf.js")
const SWPrecachePlugin = require("sw-precache-webpack-plugin")
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin")

const config = merge(base, {
  entry: {
    app: "./src/entry-client.js"
  },
  // resolve: {
  //   alias: {
  //     'create-api': './create-api-client.js'
  //   }
  // },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"client"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: "vue-hn",
      filename: "service-worker.js",
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "networkFirst"
        },
        {
          urlPattern: /\/(top|new|show|ask|jobs)/,
          handler: "networkFirst"
        },
        {
          urlPattern: "/long",
          handler: "networkFirst"
        }
      ]
    })
  )
}

module.exports = config
