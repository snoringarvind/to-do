import Todo from './Todo';

const TodoList = ({todo})=>{
  
  return(
    <div className='todo-container'>
      <ul className='todo-list'>
        {todo.map((value,index)=>{
          return <Todo text={value.text}/>
        })}
      </ul>
    </div>
  )
}

export default TodoList;