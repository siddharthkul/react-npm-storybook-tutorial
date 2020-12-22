import React from 'react'

import { Button } from 'react-npm-storybook-tutorial'
import 'react-npm-storybook-tutorial/dist/index.css'

const App = () => {
  return (
    <>
      <div style={{ borderRadius: '4px', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Button text="Default" />
        <Button variant="primary" text="Primary" onClick={() => alert('hello')} />
        <Button variant="secondary" text="Secondary" />
        <Button disabled text="Disabled" />
        <Button variant="default" disableElevation text="Disabled Elevation" />
        <Button text="Link" />
      </div>
    </>
  )
}

export default App
