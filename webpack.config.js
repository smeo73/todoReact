var config = {
   entry: './index.js',

   output: {
      path:'/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['env', 'react']
            }
         }
      ]
   }
}

module.exports = config;
