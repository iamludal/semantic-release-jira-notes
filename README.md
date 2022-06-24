# semantic-release-jira-notes

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to add links to
JIRA issues in the release notes.

[![npm latest version](https://img.shields.io/npm/v/semantic-release-jira-notes/latest.svg)](https://www.npmjs.com/package/semantic-release-jira-notes)


| Step               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `verifyConditions` | Validate the config options                          |
| `generateNotes`    | Generate the release notes with links to JIRA issues |


## Usage

First, install the plugin.

```bash
$ npm install --save-dev semantic-release-jira-notes
$ yarn add --dev semantic-release-jira-notes
```


## Configuration

The plugin should then be added to your config file.

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    ["semantic-release-jira-notes", {
      "jiraHost": "iamludal.atlassian.net",
      "ticketPrefixes": ["ATP", "OMS"], // optional
    }]
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```

**Note:** you don't need to use `@semantic-release/release-notes-generator` as it already uses
it under the hood.


### Inputs

| Name           | Required | Description                                                            |
| -------------- | :------: | ---------------------------------------------------------------------- |
| jiraHost       |    ✅     | Your JIRA host domain name                                             |
| ticketPrefixes |    ❌     | Ticket prefixes to match. If not provided, match all tickets prefixes. |
