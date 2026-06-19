export interface TodoItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type TodoList = Record<string, TodoItem>;