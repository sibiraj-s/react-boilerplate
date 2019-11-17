const WEBPACK_MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const isProduction = WEBPACK_MODE === 'production';

module.exports = {
  WEBPACK_MODE,
  isProduction
};
