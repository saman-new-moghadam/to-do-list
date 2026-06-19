"use client";

import { TodoList } from "../types/todo";
import { useEffect, useState } from "react";
import { getTodos } from "@/services/todosApi";

export function useTodos() {
  const [tasks, setTasks] = useState<TodoList>({});

  useEffect(() => {
    async function loadTodos() {
      try {
        const stored = await getTodos();
        if (stored) {
          setTasks(stored);
        }
      } catch  {
        setTasks({});
      }
    }
    loadTodos();
  }, []);

  useEffect(() => {
    // request to server when somthing change.
    // i don't have any right know :)
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks((prev) => {
      const id = crypto.randomUUID();

      return {
        ...prev,
        [id]: {
          id,
          title,
          isCompleted: false,
        },
      };
    });
  };

  function changeCompleteStatus(id: string) {
    setTasks((prev) => {
      const updated = { ...prev };

      if (!updated[id]) return prev;

      updated[id] = {
        ...updated[id],
        isCompleted: !updated[id].isCompleted,
      };

      return updated;
    });
  }

  const numberOfUnfinishedTodos = Object.values(tasks).filter(
    (v) => v.isCompleted === false,
  ).length;

  const deleteTask = (id: string) => {
    setTasks((prev) => {
      const updated = { ...prev };

      if (!updated[id]) return prev;

      delete updated[id];
      return updated;
    });
  };

  return {
    tasks,
    numberOfUnfinishedTodos,
    addTask,
    changeCompleteStatus,
    deleteTask,
  };
}
