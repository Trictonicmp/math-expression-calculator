import { tokenize } from "./tokenizer.js";
import { infixToPostfix } from "./postfix-conversor.js";
import { postfixParser } from "./psotfix-parser.js";

// simple math expresion calculator
// - tokenize expression
// - infix to postfix
// - expression tree
// - expression evaluation with shunting yard algorithm

const tokens = tokenize("2   + 5  /   (  3 * 14 . 16 ) ");
const postfixTokens = infixToPostfix(tokens);
console.log(postfixParser(postfixTokens));
