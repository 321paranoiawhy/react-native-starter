module.exports = {
  // babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
  // "parser": "babel-eslint",
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    jest: true
  }
  //  "extends": ["@antfu"]
  //  "rules": {
  //    "arrow-parens": ["error", "as-needed", {
  //      "requireForBlockBody": true
  //    }],
  //    "react/jsx-props-no-spreading": "off",
  //    "react/jsx-sort-props": ["error", {
  //      "reservedFirst": ["key"]
  //    }],
  //    "react/require-default-props": "off",
  //    "react/sort-prop-types": "error",
  //    "react/state-in-constructor": ["error", "never"],
  //    "semi-spacing": "warn"
  //  }
  //  "overrides": [
  //    {
  //      "files": [
  //        "sample/**",
  //        "test/**"
  //      ],
  //      "rules": {
  //        "import/no-unresolved": "off"
  //      }
  //    }
  //  ]
};
