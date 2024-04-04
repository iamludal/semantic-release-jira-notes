import SemanticReleaseError from "@semantic-release/error";

export class RegexError extends SemanticReleaseError {
  constructor(value, pattern) {
    super(`Value '${value}' does not match regex: ${pattern}`);
  }
}

export class InvalidTypeError extends SemanticReleaseError {
  constructor(variableName, expectedType) {
    super(`${variableName} should be of type: ${expectedType}`);
  }
}

export class InputRequiredError extends SemanticReleaseError {
  constructor(inputName) {
    super(`Input '${inputName}' is required`);
  }
}

export default { RegexError, InvalidTypeError, InputRequiredError };
