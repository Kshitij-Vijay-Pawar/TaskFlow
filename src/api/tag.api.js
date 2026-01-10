import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const getTagsApi = () => api.get("/tags");
export const createTagApi = (tag) => api.post("/tags", tag);
export const deleteTagApi = async (id) => await api.delete(`/tags/${id}`);
