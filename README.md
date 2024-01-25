# eslint-plugin-function-return-type

The "function-return-type" plugin requires the return type to be stated when writing functions.

However, in the case of components (when the first letter of the function name is capitalized), it does not raise an error even if the return type is not specified.

This plugin does not guarantee accurate operation. It's being developed as a plugin for use within the author's organization, so it may behave in unexpected ways.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```ts
const test = () => {
  return "test";
};

function test() {
  return "test";
}

const test = function () {
  return "test";
};
```

Examples of **correct** code for this rule:

```ts
const test = (): string => {
  return "test";
};

function test(): string {
  return "test";
}

const test = function (): string {
  return "test";
};

// Component(start with capital)
const Test = () => {
  return <></>;
};
```

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
