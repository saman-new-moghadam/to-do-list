"use client";
import Task from "./task";
import useStateData from "@/context/useStateData";

const Tasks = () => {
  const { tasks } = useStateData();


  const list = Object.values(tasks);

  return (
    <div className="mt-4">
      {list.map((item) => {
        return (
          <Task
            key={item.id}
            title={item.title}
            id={item.id}
            isCompleted={item.isCompleted}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
