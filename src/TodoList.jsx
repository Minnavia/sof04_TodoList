/* eslint-disable react-refresh/only-export-components */
import {useState} from "react";
import TodoTable from './components/TodoTable';

function TodoList(){

    const[todo, setDesc] = useState({
        description: "",
        date: ""
    });
    const[todos, setTodos] = useState([]);

    
    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const todoDelete = index => {
        setTodos(todos => {
            return todos.filter((_, i) => i !== index)
        })
    }

    return(
        <div>
            <h4>Add todo:</h4>
            <label>Description: </label>
            <input type="text"  value={todo.description} onChange={event => setDesc({...todo, description: event.target.value})}/>
                <label>Date: </label>
                <input type="text"  value={todo.date} onChange={event => setDesc({...todo, date: event.target.value})}/>
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} todoDelete={todoDelete}/>
        </div>
    )
}

export default TodoList;