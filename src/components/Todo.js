
const Todo =({text})=>{
  return(
    <div className='todo'>
      <li className='todo-item'>{text}</li>
      <button className='completet-btn'>check</button>
      <button className='trash-btn'>delete</button>
    </div>
  );
}

export default Todo;