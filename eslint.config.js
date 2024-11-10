import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tanstackQuery from "@tanstack/eslint-plugin-query";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  {files: ["**/*.{ts,tsx}"]},
  {
    ignores: ["dist/**/*"],
    languageOptions: 
      { 
        ...reactRecommended.languageOptions,
        ecmaVersion: 2020, 
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'eslint-plugin-query': tanstackQuery,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  ...tanstackQuery.configs['flat/recommended'],
];