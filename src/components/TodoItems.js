import React, { Component } from 'react'
import "./App.css"
class TodoItems extends Component {
    createTasks = item => {
         return (
            <div className="todoItems">
            <li className="todoItems__li" key={item.key} >
                   {item.text}
            </li>
        <button  className="todoItems__button btn danger" onClick={() => this.props.deleteItem(item.key)} > 	x </button>
            </div>
        )
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }

}

export default TodoItems