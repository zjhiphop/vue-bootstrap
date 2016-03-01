var path = require('path')

module.exports = {
  entry: {
	  app: './src/main.js',
      libs: ['./src/libs/jweixin-1.0.0.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    },
    modulesDirectories: ['node_modules']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules|build|libs/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules|build|libs/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules|vue\/src|vue-router\/|libs/
      },

        {
            test: /jweixin/,
            loader: 'imports?this=>window,define=>false'
        },

      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      },
        // temp solution to load scss, should fix css loaders issue in the future
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }
    ],
    noParse: [
        /jweixin/
    ]
  },
  //eslint: {
  //  formatter: require('eslint-friendly-formatter')
  //}
}
