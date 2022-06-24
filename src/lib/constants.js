const INPUTS = { ticketPrefixes: "ticketPrefixes", jiraHost: "jiraHost" };

const TICKET_PREFIX_REGEX = /^[A-Z][A-Z0-9]{0,50}$/;
const ISSUE_REGEX = /([A-Z][A-Z0-9]{0,50}-[1-9][0-9]*)/;
const DOMAIN_NAME_REGEX = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;

module.exports = { INPUTS, TICKET_PREFIX_REGEX, ISSUE_REGEX, DOMAIN_NAME_REGEX };
