# eslint-plugin-function-return-type

specify the type of return of the function

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@sjoleee/eslint-plugin-function-return-type`:

```sh
npm install @sjoleee/eslint-plugin-function-return-type --save-dev
```

## Usage

Add `function-return-type` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["@sjoleee/function-return-type"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@sjoleee/function-return-type/function-return-type": "warn"
  }
}
```
