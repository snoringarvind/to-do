// import './App.css';
import uniqid from 'uniqid';


const Form = ({inputText, setInputText, todo, setTodo, setStatus })=>{
  
  const inputHandler=(e)=>{
    setInputText(e.target.value);
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    setTodo([...todo,{text:inputText , completed:false, id:uniqid()}]);
    setInputText('');
  }
  
  const statusHandler = (e)=>{
    // console.log(e.target.value)
    setStatus(e.target.value);
  }

  return(
    
    <form autoComplete='off'>
      <input type='text' id='input' onChange={inputHandler} value={inputText}/>
      <button type='submit' onClick={submitHandler}>Submit</button>
      
      <div className='select'>
        <select id='filter-todos' name='todos' onClick={statusHandler}>
          <option value='all'>ALL</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;