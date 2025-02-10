/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

const baseConfig = require('@repo/eslint-config/remix.cjs');
/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...baseConfig,
};
