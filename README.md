# Unhandled Exception in JavaScript Calculator

This repository demonstrates an example of an unhandled exception in a simple JavaScript calculator. The `divide` function throws an error if the divisor is zero, but this error is not properly handled in the main application.

## Bug

The `calculator.js` file contains a simple calculator with functions for addition, subtraction, multiplication, and division.  The `divide` function throws an error if you attempt to divide by zero. However, if this error is thrown, the application will crash without any user-friendly message.

## Solution

The `calculatorSolution.js` file demonstrates how to handle this exception using a `try...catch` block. The `try` block attempts to execute the code that may throw an error; if an error occurs, the `catch` block executes and handles the error gracefully. This prevents the application from crashing and provides a more informative message to the user.