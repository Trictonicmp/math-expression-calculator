import { Tokenizer } from "./tokenizer.js";

// simple math expresion calculator
// - tokenize expression
// - infix to postfix
// - expression tree
// - expression evaluation with shunting yard algorithm

const tokenizer = new Tokenizer();
console.log(tokenizer.tokenize("2   + 5  /   (  3 * 14 . 16 ) "));
