import axios from "axios";

// const BASE_URL = process.env.BASE_URL;

const api = axios.create({
  baseURL: "http://localhost:3001/todos",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// GET all todos
export const getTodosApi = async () => {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (error) {
    console.log(error.response.status);
    console.log(error.message);
  }
};

// POST new todo
export const addTodoApi = async (todo) => {
  try {
    const { data } = await api.post("/", todo);
    return data;
  } catch (error) {
    console.log(error.response.status);
    console.log(error.message);
  }
};

// PATCH update todo
export const updateTodoApi = async (id, updates) => {
  try {
    const { data } = await api.patch(`/${id}`, updates);
    return data;
  } catch (error) {
    console.log(error.response.status);
    console.log(error.message);
  }
};

// DELETE todo
export const deleteTodoApi = async (id) => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    console.log(error.response.status);
    console.log(error.message);
  }
};
