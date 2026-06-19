"use client";

import { useTodos } from "@/app/hooks/useTodos";
import { TodoList } from "@/app/types/todo";
import { createContext } from "react";

type StateContextType = {
  tasks: TodoList;
  numberOfUnfinishedTodos: number;
  addTask: (title: string) => void;
  changeCompleteStatus: (id: string) => void;
  deleteTask: (id: string) => void;
};

const StateContext = createContext<StateContextType | null>(null);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    changeCompleteStatus,
    tasks,
    numberOfUnfinishedTodos,
    addTask,
    deleteTask,
  } = useTodos();

  return (
    <StateContext.Provider
      value={{
        tasks,
        numberOfUnfinishedTodos,
        addTask,
        changeCompleteStatus,
        deleteTask,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
