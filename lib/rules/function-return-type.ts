/**
 * @fileoverview specify the returnType of the function
 * @author sjoleee
 */

import { AST_NODE_TYPES, TSESLint } from "@typescript-eslint/utils";

type Message = "messageIdForFailure";

const rule: TSESLint.RuleModule<Message> = {
  defaultOptions: [],
  meta: {
    type: "suggestion",
    messages: {
      messageIdForFailure: "specify the returnType of the function",
    },
    schema: [],
  },
  create: (context) => {
    return {
      [AST_NODE_TYPES.VariableDeclaration]: (node) => {
        const isFunctionExpression =
          node.declarations[0].init?.type === "ArrowFunctionExpression" ||
          node.declarations[0].init?.type === "FunctionExpression";

        const isCapitalName =
          node.declarations[0].id.type === "Identifier" &&
          isCapital(node.declarations[0].id.name);

        if (isCapitalName || !isFunctionExpression) return;

        if (
          (node.declarations[0].init?.type === "ArrowFunctionExpression" &&
            !node.declarations[0].init.returnType) ||
          (node.declarations[0].init?.type === "FunctionExpression" &&
            !node.declarations[0].init.returnType)
        ) {
          context.report({
            node,
            messageId: "messageIdForFailure",
          });
        }
      },

      FunctionDeclaration: (node) => {
        const isCapitalName = node.id && isCapital(node.id.name);

        if (isCapitalName) return;

        if (!node.returnType) {
          context.report({
            node,
            messageId: "messageIdForFailure",
          });
        }
      },
    };
  },
};

export default rule;

const isCapital = (name: string) => name[0] === name[0].toUpperCase();
