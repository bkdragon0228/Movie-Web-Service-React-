import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [toDo, setTodo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === '') {
            return;
        }
        setTodo('');
        setToDos((prevArr) => {
            return [...prevArr, toDo];
        });
    };

    return (
        <div className="App">
            <h1>My To Do ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="write your to do..."
                />
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default App;
