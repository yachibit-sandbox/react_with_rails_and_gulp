module.exports = {
  entry: './frontend/javascripts/jsx/hello.jsx',
  output: {
    path: './app/assets/javascripts/components/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
