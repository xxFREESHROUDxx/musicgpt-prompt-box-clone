# Commitlint

General overview and guidelines on [commitlint](https://commitlint.js.org).

## Motivations

> Get high commit message quality and short feedback cycles by linting commit
> messages right when they are authored.

## Commit Conventions

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Consider starting the commit message with an applicable type of commit

## Commit Structure

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

The commit contains the following types, to express the intent of a commit:

- **fix**: a commit of the type fix patches a bug in your codebase (this
  correlates with PATCH in Semantic Versioning).
- **feat**: a commit of the type feat introduces a new feature to the codebase
  (this correlates with MINOR in Semantic Versioning).
- **docs**: a commit that adds or improves Bookmundi's documentation.
- **test**: a commit that adds unit tests.
- **perf**: a commit that improves performance, without functional changes.
- **chore**: a catch-all type for any other commits. For instance, if you're
  implementing a single feature and it makes sense to divide the work into
  multiple commits, you should mark one commit as feat and the rest as chore.
- **style**: a commit that improves design, without functional changes (usually
  css related changes).
- **refactor**: a commit of the type refactor introduces restructuring the
  codebase.
- **revert**: a commit of the type revert introduces reverting the changes on
  codebase.
- **build**: a commit that generates the build.

## Commit Examples

A commit fixing a bug

```
fix: fix re-rendering the header while fetching the data
```

A commit adding a new feature

```
feat: add logout action button on the header
```

A commit message with ! to draw attention to breaking change

```
chore!: drop support for Node 16

BREAKING CHANGE: use JavaScript features not available in Node 16.
```

A commit message with multi-paragraph body and multiple footers

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Config

Commitlint picks configuration from `.commitlintrc.json`. Please refer this file
for more options.

More detail, please refer
[Commitlint Rules](https://commitlint.js.org/#/reference-rules) and
[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary).
