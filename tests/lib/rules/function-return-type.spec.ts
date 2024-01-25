/**
 * @fileoverview specify the returnType of the function
 * @author sjoleee
 */

import { RuleTester } from "@typescript-eslint/rule-tester";
import rule from "../../../lib/rules/function-return-type";

RuleTester.setDefaultConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const ruleTester = new RuleTester();

ruleTester.run("eslint-plugin/function-return-type", rule, {
  valid: [
    {
      code: `const test = (): string => {
        return "test";
      };`,
    },
    {
      code: `function test(): string {
        return "test";
      }`,
    },
    {
      code: `const test = function (): string {
        return "test";
      };`,
    },
    {
      code: `const Component = () => { return <></> }`,
    },
    {
      code: `function Component () { return <></> }`,
    },
  ],
  invalid: [
    {
      code: `const test = () => {
        return "test";
      };`,
      errors: [
        {
          messageId: "messageIdForFailure",
        },
      ],
    },
    {
      code: `function test() {
        return "test";
      };`,
      errors: [
        {
          messageId: "messageIdForFailure",
        },
      ],
    },
    {
      code: `const test = function () {
        return "test";
      };`,
      errors: [
        {
          messageId: "messageIdForFailure",
        },
      ],
    },
    {
      code: `const test = () => {
        const innerFn = () => {};
        return "test";
      };`,
      errors: [
        {
          messageId: "messageIdForFailure",
        },
        {
          messageId: "messageIdForFailure",
        },
      ],
    },
  ],
});
