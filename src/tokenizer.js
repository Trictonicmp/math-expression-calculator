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

export class Tokenizer {
  constructor(string) {
    this.operators = "+-*/";
    this.numberBuffer = "";
  }

  tokenize(string) {
    const noSpacedInput = string.replace(/\s+/g, "");
    const chars = noSpacedInput.split("");
    const tokens = this.generateTokens(chars);
    return tokens;
  }

  generateTokens(charsList) {
    const tokens = [];
    charsList.forEach((char) => {
      if (this.isDigit(char)) {
        this.numberBuffer += char;
      }
      if (this.isOperator(char)) {
        if (!this.numberBufferEmpty()) {
          tokens.push(new Token(this.numberBuffer, "Digit"));
          this.cleanNumberBuffer();
        }
        tokens.push(new Token(char, "Operator"));
      }
      if (this.isLeftParenthesis(char)) {
        if (!this.numberBufferEmpty()) {
          tokens.push(new Token(this.numberBuffer, "Digit"));
          this.cleanNumberBuffer();
        }
        tokens.push(new Token(char, "LeftParenthesis"));
      }
      if (this.isRightParenthesis(char)) {
        if (!this.numberBufferEmpty()) {
          tokens.push(new Token(this.numberBuffer, "Digit"));
          this.cleanNumberBuffer();
        }
        tokens.push(new Token(char, "RightParenthesis"));
      }
    });

    return tokens;
  }

  numberBufferEmpty() {
    return this.numberBuffer === "";
  }
  cleanNumberBuffer() {
    this.numberBuffer = "";
  }

  isDigit(char) {
    return /\d/.test(char) || char === ".";
  }
  isOperator(char) {
    return char === "" ? false : this.operators.includes(char);
  }
  isLeftParenthesis(char) {
    return char === "(";
  }
  isRightParenthesis(char) {
    return char === ")";
  }
}
