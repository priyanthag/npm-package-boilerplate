const path = require('path')
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-object-rest-spread',
    // [require.resolve('babel-plugin-module-resolver'), {
    [
      'babel-plugin-module-resolver',
      {
        root: [path.resolve('./')],
        alias: {
          '~': './',
          '@': './',
          '~~': './',
          '@@': './'
        }
      }
    ]
  ]
}
