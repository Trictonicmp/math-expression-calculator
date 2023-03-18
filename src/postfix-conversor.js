// infix to postfix
// takes a list of infix tokens
// returns a list of tokens in postfix notation
// precedence: 3-[()] 2-[/*] 1-[-+]
export const infixToPostfix = (tokensList) => {
  const postfix = [];
  const operatorsStack = [];

  tokensList.forEach((currentToken) => {
    console.log(currentToken);
    if (currentToken.type !== "Number") {
      if (currentToken.type === "RightParenthesis") {
        let stackTopMost = operatorsStack.pop();
        while (stackTopMost.type !== "LeftParenthesis") {
          postfix.push(stackTopMost);
          stackTopMost = operatorsStack.pop();
        }
      } else if (
        currentToken.type === "LeftParenthesis" ||
        isEmpty(operatorsStack)
      ) {
        operatorsStack.push(currentToken);
      } else if (
        operatorPecedenceOf(currentToken) >
        operatorPecedenceOf(operatorsStack.flat(-1))
      ) {
        operatorsStack.push(currentToken);
      } else {
        while (
          operatorPecedenceOf(currentToken) <=
            operatorPecedenceOf(operatorsStack.flat(-1)) &&
          !isEmpty(operatorsStack)
        ) {
          const stackTopMost = operatorsStack.pop();
          postfix.push(stackTopMost);
        }
        operatorsStack.push(currentToken);
      }
    } else {
      postfix.push(currentToken);
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
    "*": 4,
    "/": 3,
    "+": 2,
    "-": 2,
    "(": 1,
    ")": 1,
  };

  return precedences[token.value];
};
