import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import type { TodoType } from "./types/todo";
import type { UserType } from "./types/user";

const user: UserType = {
  name: "クズ",
  hobbies: ["競馬", "パチンコ"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <hr />
      <Text color="red" fontSize="36px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          completed={todo.completed}
          title={todo.title}
          userId={todo.userId}
        />
      ))}
    </div>
  );
}
