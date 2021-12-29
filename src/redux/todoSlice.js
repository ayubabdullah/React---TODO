import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodoAsync = createAsyncThunk(
  "todos/getTodoAsync",
  async () => {
  const response = await fetch("http://localhost:8000/todos");
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await fetch(
      "http://localhost:8000/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          title: payload.title,
          body: payload.body,
          completed: false,
        }),
      }
    );
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const toggleCompleteTodoAsync = createAsyncThunk(
  "todos/toggleCompleteTodoAsync",
  async (payload) => {
     const response = await fetch(`http://localhost:8000/todos/${payload.id}`, {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         completed: payload.completed,
       }),
     });
     if (response.ok) {
       const todo = await response.json();
       return { id: todo.id, completed: todo.completed };
     }
  }
);
export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
     const response = await fetch(`http://localhost:8000/todos/${payload.id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
     });
     if (response.ok) {
       const todo = await response.json();
       return { id: todo.id };
     }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      const todo = {
        id: Date.now(),
        title: payload.title,
        body: payload.body,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodoAsync.fulfilled]: (state, { payload }) => {
      return payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, { payload }) => {
      state.push(payload.todo);
    },
    [toggleCompleteTodoAsync.fulfilled]: (state, { payload }) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].completed = payload.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
