const { INPUTS, ISSUE_REGEX } = require("./constants");
const { generateNotes } = require("@semantic-release/release-notes-generator");

module.exports = async (pluginConfig, context) => {
  const ticketPrefixes = pluginConfig[INPUTS.ticketPrefixes];
  const jiraHost = pluginConfig[INPUTS.jiraHost];
  const notes = await generateNotes(pluginConfig, context);

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
