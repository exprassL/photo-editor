module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/photo-editor/dist' : '/',

    outputDir: 'dist',

    assetsDir: 'assets',

    indexPath: 'index.html',

    filenameHashing: true, // 默认：true

    runtimeCompiler: false,

    productionSourceMap: true,

    crossorigin: undefined,

    integrity: false,

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto'
                }
            ]
        }
    },

    devServer: {
        // open: true, // 启动后自动打开浏览器
    },

    parallel: require('os').cpus().length > 1, // 默认： 系统 cpu 多于一个内核时自动启用

    pwa: {},

};