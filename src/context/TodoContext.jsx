import { createContext, useEffect, useState } from "react";
9;
import {
  addTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from "../api/todos.api";
import { createTagApi, deleteTagApi, getTagsApi } from "../api/tag.api";

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  const getTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodosApi();
      setTodos(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    const newTodo = await addTodoApi(todo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = async (id, updates) => {
    const updated = await updateTodoApi(id, updates);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const deleteTodo = async (id) => {
    await deleteTodoApi(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const getTags = async () => {
    const { data } = await getTagsApi();
    setTags(data);
  };

  const createTag = async (tag) => {
    await createTagApi(tag);
    await getTags(); // refresh tag list
  };

  const deleteTag = async (id) => {
    await deleteTagApi(id);
    await getTags(); // refresh tag list
  }

  useEffect(() => {
    getTodos();
    getTags();
  }, []);

  const value = {
    todos,
    loading,
    error,
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,

    selectedTodo,
    setSelectedTodo,

    tags,
    getTags,
    createTag,
    deleteTag,
    // addTags,

    searchQuery,
setSearchQuery,

  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
