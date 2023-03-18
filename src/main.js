import { tokenize } from "./tokenizer.js";

// simple math expresion calculator
// - tokenize expression
// - infix to postfix
// - expression tree
// - expression evaluation with shunting yard algorithm

console.log(tokenize("2   + 5  /   (  3 * 14 . 16 ) "));
