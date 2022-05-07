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
          // use new JSX transform
          runtime: 'automatic',
        },
      ],
    ].filter(Boolean),
  };
};
