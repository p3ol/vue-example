module.exports = {
  presets: [
    ['@babel/env', {
      corejs: 3,
      useBuiltIns: 'usage',
    }],
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['@babel/transform-runtime', {
      corejs: 3,
      helpers: true,
      regenerator: true,
      useESModules: false,
    }],
    '@babel/proposal-optional-chaining',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    '@babel/proposal-nullish-coalescing-operator',
  ],
};
