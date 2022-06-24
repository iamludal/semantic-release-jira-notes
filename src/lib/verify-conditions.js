const { InputRequiredError, RegexError } = require("./errors");
const SemanticReleaseError = require("@semantic-release/error");
const AggregateErrorPromise = import("aggregate-error");
const constants = require("./constants");

const { INPUTS, TICKET_PREFIX_REGEX, DOMAIN_NAME_REGEX } = constants;

module.exports = async pluginConfig => {
  const ticketPrefixes = pluginConfig[INPUTS.ticketPrefixes] ?? [];
  const jiraHost = pluginConfig[INPUTS.jiraHost];
  const errors = [];

  const AggregateError = (await AggregateErrorPromise).default;

  if (!Array.isArray(ticketPrefixes)) {
    errors.push(new SemanticReleaseError(INPUTS.ticketPrefixes, Array.name));
  } else {
    for (const prefix of ticketPrefixes) {
      if (!TICKET_PREFIX_REGEX.test(prefix)) {
        errors.push(new RegexError(prefix, TICKET_PREFIX_REGEX));
      }
    }
  }

  if (!jiraHost) {
    errors.push(new InputRequiredError(INPUTS.jiraHost));
  } else if (!DOMAIN_NAME_REGEX.test(jiraHost)) {
    errors.push(new RegexError(jiraHost, DOMAIN_NAME_REGEX));
  }

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
};
