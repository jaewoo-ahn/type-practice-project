import {useState} from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const AddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={AddTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
