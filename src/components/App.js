import React,{Component} from 'react';
import TodoList from './TodoList'
import TodoItems from "./TodoItems"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-grid.css"

class App extends Component {
    inputElement = React.createRef();
    state= {
        items: [],
        currentItem: {
            text: '',
            key: ''
        }
    }
    render() {
        return (
            <div className="app container">
                <div className="row align-items-center">
                    <div className="col">

                    </div>
                    <div className="col">
                        <TodoList addItem={this.addItem} inputElement={this.inputElement}
                                  handleInput={this.handleInput}
                                  currentItem={this.state.currentItem}/>
                        <TodoItems entries={this.state.items} deleteItem={this.deleteItem}  checkItem={this.checkItem}/>
                    </div>
                    <div className="col">

                    </div>
                </div>

                </div>
            )
    }

    addItem = (e)=>{
        e.preventDefault()
        console.log('Hello Add Item')
        const newItem= this.state.currentItem;
        console.log('privet',newItem)
        if (newItem.text !==''){

            console.log('New Item created');
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: { text: '', key: '' },
            })
        }
        console.log(this.state.items);
    }
    handleInput = e => {
        console.log('Hello Input')
        const itemText = e.target.value
        console.log(itemText);
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
            currentItem,
        })
    }
    deleteItem = key =>{
        const filteredItems = this.state.items.filter(item=>{ return item.key !== key})
        this.setState({
            items: filteredItems,
        })
    }
    checkItem = key =>{
        const filteredItems = this.state.items.filter(item=>{ return item.key !== key})
        this.setState({
            items: filteredItems,
        })
    }
   }

export default App
