import React, {useState}  from "react";
import {Coffee,Giff,Car} from "./Assets/Images/Icons/icons";
import "./Assets/main.scss";
import TodoItem from "./Components/TodoItem/todoItem";
import "./Components/Buttons/button";

function App() {

  const [state, setState] = React.useState(0)

  const  increment  = () => {
    return setState(state + 1);
  }

  const num = 5;
  const num2 = 10;

  const text = "Total";

function sayHello() {
  return "Hello"
}


  const [todos, setTodos] = useState([

    JSON.parse(window.localStorage.getItem("todos") || [ ])


    // {id:1, title:"Code yozdi", isComplated:false},
    // {id:2, title:"Formula yozdi", isComplated:false},
    // {id:3, title:"Hikoya yozdi", isComplated:false},

  ])

  const [value, setValue] = useState("haha");

  console.log(todos);



  const handleInput = (evt) => {

    const newTodo = {
      id:todos[todos.length -1]?.id + 1 || 0,
      title:evt.target.value,
      isComplated:false,
    }

    if (evt.code === "Enter") {
      evt.target.value = null;
      window.localStorage.setItem("todos",JSON.stringify([...todos, newTodo]))
      setTodos([...todos, newTodo])
      console.log(evt.target.value);
    }

  }

  const changeValue = (evt) => {
    return setValue(evt.target.value)
  }



  const handleDeleteTodo = (evt) => {
    const deletedTodoId = evt.target.dataset.todoId - 0;

   const filteredTodos = todos.filter(item => item.id !== deletedTodoId);
   window.localStorage.setItem("todos",JSON.stringify(filteredTodos))

   console.log(filteredTodos);
   setTodos(filteredTodos)

  }

  const handleCompleted = (evt) => {
      const completedId = evt.target.dataset.todoId - 0;
      const finedItem = todos.find(item => item.id === completedId);
      finedItem.isComplated = !finedItem.isComplated;
      window.localStorage.setItem("todos",JSON.stringify(todos));

      setTodos([...todos])
      console.log(todos);
  }

  return (
   
    <>

    <h2>{value}</h2>
    
    <input onChange={changeValue} type="text" placeholder="Yozing" />

    <h1>Salom</h1>
    <h2>{state}</h2>

    <button onClick={increment}>Increment</button>
    <button onClick={function() { setState(state - 1)}}>Decrement</button>

    <p>5+10 ={text} {num + num2}</p>

    {/* <Button/> */}

    {
      sayHello()
    }

    <Coffee/>
    <Giff/>
    <Car/>


    <br/>
    <br/>

    <input onKeyUp={handleInput} type="text" placeholder="Todo..." />

    <ul>
      {
        todos.map(item => (
          // <li key={item.id}>{item.title}</li>

          <TodoItem isComplated={item.isComplated} handleCompleted={handleCompleted} handleDeleteTodo={handleDeleteTodo} key={item.id} props={item}/>
          // <TodoItem key={item.id}/>{item.title}</TodoItem>
        ))
      }
    </ul>

    </>

  );
}

export default App;
