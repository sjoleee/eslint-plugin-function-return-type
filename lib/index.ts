import { TSESLint } from "@typescript-eslint/utils";
import functionReturnType from "./rules/function-return-type";

export const rules: Record<string, TSESLint.RuleModule<string, any[], any>> = {
  "function-return-type": functionReturnType,
};
