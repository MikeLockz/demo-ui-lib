# CodeFi's shared frontend components

Monorepo for developing and publishing React components.

# Quick start

Each package is independently versioned and published. This allows to opt-in to individual component updates without needing to update an entire library of components.This also required more package installations and import statements.

**Install components**

```bash
npm install @rimble/codefi-button

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components styled-system
```

**Import components**

```js
import Button from @rimble/codefi-button
```

# Contributing

Any new components or changes to existing components will go through a PR review process before merging and releasing components.
