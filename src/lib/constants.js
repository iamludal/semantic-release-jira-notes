export const INPUTS = { ticketPrefixes: "ticketPrefixes", jiraHost: "jiraHost" };

export const TICKET_PREFIX_REGEX = /^[A-Z][A-Z0-9]{0,50}$/;
export const ISSUE_REGEX = /([A-Z][A-Z0-9]{0,50}-[1-9][0-9]*)/;
export const DOMAIN_NAME_REGEX = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;

export default { INPUTS, TICKET_PREFIX_REGEX, ISSUE_REGEX, DOMAIN_NAME_REGEX };
