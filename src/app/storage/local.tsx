import { TodoList } from "@/components/AddInput";

const STORAGE_KEY = "list";

export const todoStorage = {
  get(): TodoList {
    if (typeof window === "undefined") return {};
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  },

  set(data: TodoList) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },
};
