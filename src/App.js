import "./App.css";
import { ToDoList } from "./Components/todolist.js";

function Body() {
  return (
    <div>
      <ToDoList />
    </div>
  );
}

function App() {
  return <Body />;
}

export default App;
