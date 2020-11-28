import Todo from './Todo';

const TodoList = ({todo ,setTodo, filterTodo})=>{
  
  return(
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodo.map((value,index)=>{
          return (
            <Todo 
              text={value.text} 
              key={value.id}
              todo={todo}
              currentTodo = {value}
              setTodo={setTodo}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList;