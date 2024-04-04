import { INPUTS, ISSUE_REGEX } from "./constants.js";
import { generateNotes } from "@semantic-release/release-notes-generator";

export default async (pluginConfig, context) => {
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
