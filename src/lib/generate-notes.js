const { INPUTS, ISSUE_REGEX } = require("./constants");

module.exports = async pluginConfig => {
  const ticketPrefixes = pluginConfig[INPUTS.ticketPrefixes];
  const jiraHost = pluginConfig[INPUTS.jiraHost];

  let issueRegex;

  if (!ticketPrefixes) {
    issueRegex = new RegExp(ISSUE_REGEX, "g");
  } else if (ticketPrefixes.length > 0) {
    issueRegex = new RegExp(`((${ticketPrefixes.join("|")})-[1-9][0-9]*)`, "g");
  } else {
    return notes;
  }

  return notes?.replace(issueRegex, `[$1](https://${jiraHost}/browse/$1)`);
};
