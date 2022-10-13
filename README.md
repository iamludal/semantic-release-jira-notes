# semantic-release-jira-notes

[![npm latest version](https://img.shields.io/npm/v/semantic-release-jira-notes/latest.svg)](https://www.npmjs.com/package/semantic-release-jira-notes)

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to add links to
JIRA issues in the release notes.

For each JIRA issue detected in the release notes, it will add a link that brings directly to this issue on JIRA.


| Step               | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `verifyConditions` | Validate the config options                          |
| `generateNotes`    | Generate the release notes with links to JIRA issues |


## Preview

![Preview](./docs/jira-link.png)

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

> **Note**: this plugin uses `@semantic-release/release-notes-generator` under the hood, so you don't need to use it anymore.

You can also use options defined by [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator#options).

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    ["semantic-release-jira-notes", {
      "jiraHost": "iamludal.atlassian.net",
      "preset": "conventionalcommits",
      "presetConfig": {
        "types": [
          { "type": "feat", "section": "Features" },
          { "type": "fix", "section": "Bug Fixes" },
          { "type": "build", "section": "Dependencies Updates", "hidden": false }
        ]
      }
    }]
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```
