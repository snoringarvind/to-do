import { useState ,useEffect} from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';

const App=()=>{
  
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);


  useEffect(()=>{
    getLocalTodo();
  },[])

  useEffect(()=>{
    filterHandler();
  },[status, todo]);

  useEffect(()=>{
    saveLocalTodo();
  },[todo]);

  const filterHandler = ()=>{
    switch(status){
      case 'completed': setFilterTodo(todo.filter(value => value.completed));
      break;
      case 'uncompleted': setFilterTodo(todo.filter(value => !value.completed));
      break;
      default: setFilterTodo(todo);
      break;
    }
  }

  const saveLocalTodo = ()=>{
    localStorage.setItem('todo',JSON.stringify(todo));
  }

  const getLocalTodo=()=>{
    if(localStorage.getItem('todo')!==null){
      const x =JSON.parse(localStorage.getItem('todo'));
      setTodo(x);
    }
  }

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
          setStatus={setStatus}
        />

        <TodoList
          todo={todo}
          setTodo={setTodo}
          filterTodo={filterTodo}
        />

      </div>
    
    </div>
  )
}

export default App
