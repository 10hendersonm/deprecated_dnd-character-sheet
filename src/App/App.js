import React, { Component } from 'react'

class App extends Component {
  render () {
    const style = {
      container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
      },
    }

    return (
      <div style={style.container}>
        Hello World
      </div>
    )
  }
}

export default App
