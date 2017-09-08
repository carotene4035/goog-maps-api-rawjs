module.exports = {
  context: __dirname + '/src',
  entry: {
    'application': './app.js',
  },
  output: {
    path: __dirname + '/public',
    filename: 'map.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
