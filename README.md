# semantic-release-jira-notes

[![npm latest version](https://img.shields.io/npm/v/semantic-release-jira-notes/latest.svg)](https://www.npmjs.com/package/semantic-release-jira-notes)

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to add links to
JIRA issues in the release notes.

For each JIRA issue detected in the release notes, it will add a link that brings directly to this issue on JIRA.


| Step               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `verifyConditions` | Validate the config options                          |
| `generateNotes`    | Generate the release notes with links to JIRA issues |


## Usage

### Installation

```bash
$ npm install --save-dev semantic-release-jira-notes
$ yarn add --dev semantic-release-jira-notes
```

### Inputs

| Name           | Required | Description                                                            |
| -------------- | :------: | ---------------------------------------------------------------------- |
| jiraHost       |    ✅     | Your JIRA host domain name                                             |
| ticketPrefixes |    ❌     | Ticket prefixes to match. If not provided, match all tickets prefixes. |

### Configuration

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    ["semantic-release-jira-notes", {
      "jiraHost": "iamludal.atlassian.net",
      "ticketPrefixes": ["ATP", "OMS"]
    }]
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```

> **Note:** you don't need to use `@semantic-release/release-notes-generator`.
