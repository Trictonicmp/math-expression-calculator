export const infixToPostfix = (tokensList) => {
  const postfix = [];
  const operatorsStack = [];

  tokensList.forEach((token) => {
    if (token.type === "Digit") {
      postfix.push(token);
    }
    if (token.type === "LeftParenthesis") {
      operatorsStack.push(token);
    }
    if (token.type === "RightParenthesis") {
      let stackTopMost = operatorsStack.pop();
      while (stackTopMost.type !== "LeftParenthesis") {
        postfix.push(stackTopMost);
        stackTopMost = operatorsStack.pop();
      }
    }

    if (token.type === "Operator") {
      let done = false;
      while (!done) {
        if (operatorsStack.at(-1).type === "LeftParenthesis") {
          operatorsStack.push(token);
          done = true;
          break;
        }

        let stackTopMost = operatorsStack.pop();
        if (operatorPecedenceOf(token) >= operatorPecedenceOf(stackTopMost)) {
          postfix.push(stackTopMost);
        } else {
          operatorsStack.push(token);
          done = true;
        }
      }
    }
  });

  while (!isEmpty(operatorsStack)) {
    let stackTopMost = operatorsStack.pop();
    postfix.push(stackTopMost);
  }

  return postfix;
};

const isEmpty = (stack) => {
  return stack.length === 0;
};

const operatorPecedenceOf = (token) => {
  const precedences = {
    "(": 3,
    ")": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
  };

  return precedences[token.value];
};
