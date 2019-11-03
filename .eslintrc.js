module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:promise/recommended",
		"plugin:sonarjs/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "./tsconfig.json"
	},
  "plugins": ["react", "react-hooks", "promise", "sonarjs", "@typescript-eslint", "jsx-a11y", "sonarjs"],
  "settings": {
    "import/resolver": {
      "node": {
        paths: ['./src'],
        extensions: ['.ts', '.tsx'],
      }
    }
  },
	"rules": {
    "@typescript-eslint/interface-name-prefix": ['error', { prefixWithI: 'always' }],
    "typescript-eslint/no-explicit-any": 0,

    "react/jsx-filename-extension": ["error", { "extensions": [".ts", ".tsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/button-has-type": 0,
    
    "import/prefer-default-export": 0,

    "sonarjs/prefer-immediate-return": 0,

    "eol-last": 0,
    "object-curly-newline": 0,
    "arrow-parens": ['error', 'as-needed'],
    "linebreak-style": 0,
    "no-undef": 0,
    "max-len": ["error", { code: 120 }],
    "class-methods-use-this": 0,
	}
}