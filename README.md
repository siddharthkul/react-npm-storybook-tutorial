# react-npm-storybook-tutorial

> Do not use in production / this is a tutorial package for myself. Thank you :) 

## Goals for self
- learn how to publish a custom component to npm (unscoped)
- learn and explore storybook to document UI components
- learn open source best practices

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-npm-storybook-tutorial.svg)](https://www.npmjs.com/package/react-npm-storybook-tutorial) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-npm-storybook-tutorial
```

## Usage

```tsx
import React, { Component } from 'react'

import { ReactCustomButton } from 'react-npm-storybook-tutorial'
import 'react-npm-storybook-tutorial/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ReactCustomButton
        variant='primary'
        text='Primary'
        onClick={() => alert('hello world')}
      />
    )
  }
}
```

## License

MIT © [siddharthkul](https://github.com/siddharthkul)
