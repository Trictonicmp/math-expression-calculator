import { Token } from "./tokenizer.js";
// postfixParser
// takes a list of postfix tokens
// returns result of math expression
export const evaluatePostfix = (postfixTokens) => {
  const resultStack = [];

  postfixTokens.forEach((token) => {
    if (token.type === "Number") {
      resultStack.push(token);
    } else {
      const operandB = resultStack.pop();
      const operandA = resultStack.pop();
      const result = calcualte(operandA.value, operandB.value, token.value);
      resultStack.push(new Token(result, "Number"));
    }
  });

  return resultStack.pop().value;
};

const calcualte = (a, b, operator) => {
  a = parseFloat(a);
  b = parseFloat(b);
  const operation = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };

  return operation[operator];
};
