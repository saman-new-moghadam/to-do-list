import { TodoList } from "@/app/types/todo"; 

type DummyJson = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1",
  );
  if (!response.ok) return {};

  const data: DummyJson[] = await response.json();
  const my_new_data: TodoList = {};

  data.forEach((item) => {
    my_new_data[String(item.id)] = {
      id: String(item.id),
      isCompleted: item.completed,
      title: item.title,
    };
  });

  console.log(my_new_data);

  return my_new_data;
};
