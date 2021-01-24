/* eslint-disable */

// next.js v10.0.4においてnext start時、PORT環境変数に応じてデプロイするポートを変更する機能がないため、それに対応するためのscript。
// see: https://github.com/vercel/next.js/issues/10338

const cli = require('next/dist/cli/next-start');

cli.nextStart([
  '-p',
  process.env.PORT || 3000,
  '-H',
  process.env.HOSTNAME || '0.0.0.0',
]);
