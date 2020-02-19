# Derivitive UI library

Monorepo for developing and publishing React components that are based from anoother UI library (rimble-ui).

# Quick start

Each package is independently versioned and published. This allows to opt-in to individual component updates without needing to update an entire library of components. This also requires more package installations and import statements.

**Install components**

```bash
npm install @rimble/button

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components styled-system
```

**Import components**

```js
import Button from @rimble/button
```

# Contributing

Any new components or changes to existing components will go through a PR review process before merging and releasing components.
