import React from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/todo/TodoForm";
import axios from "axios";
import TodoList, { Todo } from "../components/todo/TodoList";
import Paper from "@material-ui/core/Paper";

const Dashboard = () => {
  // const classes = useStyles();
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  React.useEffect(() => {
    axios
      .get("https://mern-todo-wingman.herokuapp.com/todos", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.status === 200) {
          setTodoList(res.data.todos);
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <Paper style={{ margin: "100px" }} elevation={2}>
        <div className="max-w-md mx-auto pt-12">
          <h1 className="font-bold text-green-400 text-center text-2xl mb-12 ">
            My Todos dashboard
          </h1>
          <TodoForm todos={todoList} setTodos={setTodoList} />
          <TodoList todos={todoList} setTodos={setTodoList} />
        </div>
      </Paper>
    </>
  );
};

export default Dashboard;
