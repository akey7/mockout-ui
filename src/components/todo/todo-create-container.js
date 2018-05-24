import React, { Component } from 'react'

class TodoCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: ''
    }
  }

  onItemChange = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      item: event.target.value
    })
  }

  render() {
    return (
      <form>
        <label>Create item: </label>
        <input onChange={this.onItemChange} value={this.state.item} />
        <input type='submit' />
      </form>
    )
  }
}


export default TodoCreate
