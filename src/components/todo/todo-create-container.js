import React, { Component } from 'react'

class TodoCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: ''
    }
  }

  render() {
    return (
      <form>
        <label>Item</label>
        <input value={this.state.item} />
        <input type='submit' />
      </form>
    )
  }
}


export default TodoCreate
