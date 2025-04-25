/**
 * @file custom shona programming language
 * @author moveaxxff <moveaxxff@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "chenglang",


  // ...

  rules: {
    source_file: $ => repeat($._definition),

    _definition: $ => choice(
      $.function_definition
      // TODO: other kinds of definitions
    ),

    _expression: $ => choice(
      $.identifier,
      $.number
      $.parenthesized_expression
      // TODO: other kinds of expressions
    ),
    _statement: $ => choice(
      $.return_statement,
      $.dai_statement
      // TODO: other kinds of statements
    ),
    function_definition: $ => seq(
      'basa',
      field('name', $.identifier),
      field('parameters', $.parameter_list),
      field('body', $.block)
    ),
    parameter_list: $ => seq(
      '(',
      // TODO: parameters
      ')'
    ),
    block: $ => seq(
      '{',
      repeat($._statement),
      '}'
    ),

    parenthesized_expression: $ => seq(
      '(',
      $._expressions,
      ')',
    ),
    return_statement: $ => seq(
      'dzoka',
      $._expression,
      ';'
    ),

    dai_statement: $ => seq(
      'dai',
      $.parenthesized_expression,
      $.block
    ),


    identifier: $ => /[a-z]+/,

    number: $ => /\d+/
  }
});

