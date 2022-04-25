import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn typescript")];

  const AddTodoHandler = (todoText: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={AddTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
