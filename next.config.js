const withPWA = require('next-pwa')
const webpack = require('webpack');
 module.exports = withPWA({
  future: {webpack5: true},
  pwa: {
    dest: 'public',
    //disable: process.env.NODE_ENV === 'development',
  
    register: true,
    
    sw: 'service-worker.js',
    fallbacks: {
      
      document: '/fallback',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    }
  },
  webpack: (config, { dev, buildId, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.CONFIG_BUILD_ID': JSON.stringify(buildId)
      })
    );
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
  
  
})

