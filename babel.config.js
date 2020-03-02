module.exports = {
  presets: [
    ['@babel/preset-env']
  ],
  plugins: ['@babel/plugin-transform-destructuring', '@babel/plugin-transform-runtime'],
  ignore: [
    'src/**/*.test.js',
    'src/**/__mocks__'
  ]
}
