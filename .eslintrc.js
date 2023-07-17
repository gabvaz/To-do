require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  rules: {
    'linebreak-style': 0,
    'vue/multi-word-component-names': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
