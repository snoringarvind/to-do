
const Todo =({text,todo,currentTodo,setTodo})=>{

  //Events
  const deletehandler=()=>{
    setTodo(todo.filter((value,index)=>{
      return currentTodo.id!==value.id
    }))
  }

  const completeHandler=()=>{
    setTodo(todo.map((value, index)=>{
      if(currentTodo.id===value.id){
        return {...value, completed: !currentTodo.completed}
      }else{
        return value;
      }
    }))
  }

  return(
    <div className='todo'>
      <li className={`todo-item ${currentTodo.completed ? 'completed' : ''}`}>{text}</li>
      <button className='completet-btn' onClick={completeHandler}>check</button>
      <button className='trash-btn' onClick={deletehandler}>delete</button>
    </div>
  );
}

export default Todo;