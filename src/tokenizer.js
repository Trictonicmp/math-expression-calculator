// tokenizer
// takes a math expression as string and returns
// a list of tokens
// valid tokens: + - * / ( ) [numbers]
export class Token {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

const validOperators = "+-*/";

export const tokenize = (string) => {
  const noSpacedInput = string.replace(/\s+/g, "");
  const chars = noSpacedInput.split("");
  const tokens = generateTokens(chars);
  return tokens;
};

const generateTokens = (charsList) => {
  const tokens = [];
  let numberBuffer = "";

  charsList.forEach((char) => {
    if (isDigit(char)) {
      numberBuffer += char;
    }
    if (isOperator(char)) {
      if (!numberBufferEmpty(numberBuffer)) {
        tokens.push(new Token(numberBuffer, "Number"));
        numberBuffer = "";
      }
      tokens.push(new Token(char, "Operator"));
    }
    if (isLeftParenthesis(char)) {
      if (!numberBufferEmpty(numberBuffer)) {
        tokens.push(new Token(numberBuffer, "Number"));
        numberBuffer = "";
      }
      tokens.push(new Token(char, "LeftParenthesis"));
    }
    if (isRightParenthesis(char)) {
      if (!numberBufferEmpty(numberBuffer)) {
        tokens.push(new Token(numberBuffer, "Number"));
        numberBuffer = "";
      }
      tokens.push(new Token(char, "RightParenthesis"));
    }
  });

  return tokens;
};

const numberBufferEmpty = (numberBuffer) => {
  return numberBuffer === "";
};

const isDigit = (char) => {
  return /\d/.test(char) || char === ".";
};

const isOperator = (char) => {
  return char === "" ? false : validOperators.includes(char);
};

const isLeftParenthesis = (char) => {
  return char === "(";
};

const isRightParenthesis = (char) => {
  return char === ")";
};
