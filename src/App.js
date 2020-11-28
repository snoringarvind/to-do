import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';

const App=()=>{
  
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);

  return(
    
    <div className='container'>
      
      <div className='App'>
        <header>
          <h1>Arvind's ToDo</h1>
        </header>
        
        <Form 
          inputText = {inputText}
          setInputText={setInputText} 
          todo = {todo}
          setTodo={setTodo}
        />

        <TodoList
          todo={todo}
        />

      </div>
    
    </div>
  )
}

export default App
