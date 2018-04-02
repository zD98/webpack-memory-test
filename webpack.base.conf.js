const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpackConfig = {
    entry: { app: './src/index.js' },
    output: {
        path: path.resolve(path.dirname(__dirname), 'dist'), // string
        filename: '[name].js' // string
    },

    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
                include: [path.resolve('./src')],
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            // provide a cache directory where cache items should be stored
                            cacheDirectory: path.resolve('./.cache')
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: './.cache/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
            // use all of these nested rules (combine with conditions to be useful)
        ]
    },
    resolve: {
        // options for resolving module requests
        modules: ['node_modules', 'src'],
        // directories where to look for modules

        extensions: ['.js', '.jsx'],
        // extensions that are used

        alias: {
            // a list of module name aliases
        }
    },

    performance: {
        hints: false // enum
    },

    devtool: false, // enum

    // context: path.dirname(__dirname), // string (absolute path!)
    // the home directory for webpack

    target: 'web', // enum

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    plugins: [],
    parallelism: 2, // number
    // limit the number of parallel processed modules
    profile: true, // boolean
    // capture timing information
    bail: false, //boolean
    // fail out on the first error instead of tolerating it.
    cache: false, // boolean
    // disable/enable caching
    watch: false
}

module.exports = webpackConfig
