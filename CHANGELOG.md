# [4.0.0](https://github.com/iamludal/semantic-release-jira-notes/compare/3.0.0...4.0.0) (2024-05-28)


### Code Refactoring

* update project to ESM ([#5](https://github.com/iamludal/semantic-release-jira-notes/issues/5)) ([1d18aec](https://github.com/iamludal/semantic-release-jira-notes/commit/1d18aecf617dc7363a854a58577c2fcf4197016d))


### BREAKING CHANGES

* migrate imports from CommonJS to ESM

# [3.0.0](https://github.com/iamludal/semantic-release-jira-notes/compare/2.0.1...3.0.0) (2022-07-01)


### Bug Fixes

* **generate-notes:** use release-notes-generator plugin ([e7c0770](https://github.com/iamludal/semantic-release-jira-notes/commit/e7c0770d88727f397ddb62083598c3541a92239f))


### BREAKING CHANGES

* **generate-notes:** users should now remove release-notes-generator
from their plugin list.

## [2.0.1](https://github.com/iamludal/semantic-release-jira-notes/compare/2.0.0...2.0.1) (2022-06-30)


### Bug Fixes

* **generate-notes:** get notes from context ([d988d34](https://github.com/iamludal/semantic-release-jira-notes/commit/d988d345e63626ef0662d1a759a2b44a70ce59c6))

# [2.0.0](https://github.com/iamludal/semantic-release-jira-notes/compare/1.0.3...2.0.0) (2022-06-28)


### Features

* **generate-notes:** don't use release-notes-generator manually ([cd8cbe1](https://github.com/iamludal/semantic-release-jira-notes/commit/cd8cbe1ef89ede9608afdafde7c75a4a1e9c5ed5))


### BREAKING CHANGES

* **generate-notes:** release-notes-generator should now be defined in the
configuration file before semantic-release-jira-notes

## [1.0.3](https://github.com/iamludal/semantic-release-jira-notes/compare/1.0.2...1.0.3) (2022-06-28)


### Bug Fixes

* **verify:** error when ticketPrefixes is undefined ([283ff8f](https://github.com/iamludal/semantic-release-jira-notes/commit/283ff8f96fb7778a701871381b49d9eda0420b5b))
