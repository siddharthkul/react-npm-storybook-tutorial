import React from 'react'

import { ReactCustomButton } from 'react-npm-storybook-tutorial'
import 'react-npm-storybook-tutorial/dist/index.css'

const App = () => {
  return (
    <>
      <div style={{ borderRadius: '4px', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <ReactCustomButton text="Default" />
        <ReactCustomButton variant="primary" text="Primary" onClick={() => alert('hello')} />
        <ReactCustomButton variant="secondary" text="Secondary" />
        <ReactCustomButton disabled text="Disabled" />
        <ReactCustomButton variant="default" disableElevation text="Disabled Elevation" />
        <ReactCustomButton text="Link" />
      </div>
    </>
  )
}

export default App
