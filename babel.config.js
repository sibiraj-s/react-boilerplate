module.exports = (api) => {
  const isEnvDevelopment = api.env('development');
  const isEnvTest = api.env('test');

  return {
    presets: [
      !isEnvTest && [
        '@babel/preset-env', {
          // Allow importing core-js in entrypoint and use browserlist to select polyfills
          useBuiltIns: 'entry',
          // Use corejs@3
          corejs: 3,
          // Do not transform modules to CJS
          modules: false,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
        },
      ],
      isEnvTest && [
        '@babel/preset-env', {
          targets: {
            // Compile against the current node version
            node: 'current',
          },
        },
      ],
      [
        '@babel/preset-react', {
          // Adds component stack to warning messages
          // Adds __self attribute to JSX which React will use for some warnings
          development: isEnvDevelopment,
          // Will use the native built-in instead of trying to polyfill
          // behavior for any plugins that require one.
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
  };
};
