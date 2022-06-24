const SemanticReleaseError = require("@semantic-release/error");

class RegexError extends SemanticReleaseError {
  constructor(value, pattern) {
    super(`Value '${value}' does not match regex: ${pattern}`);
  }
}

class InvalidTypeError extends SemanticReleaseError {
  constructor(variableName, expectedType) {
    super(`${variableName} should be of type: ${expectedType}`);
  }
}

class InputRequiredError extends SemanticReleaseError {
  constructor(inputName) {
    super(`Input '${inputName}' is required`);
  }
}

module.exports = { RegexError, InvalidTypeError, InputRequiredError };
