"use client";

import AddInput from "@/components/AddInput";
import Tasks from "@/components/tasks/ShowTasks";
import useStateData from "@/context/useStateData";

const YourToDo = () => {
  const { numberOfUnfinishedTodos } = useStateData();

  return (
    <div className="text-center mt-10 flex justify-center ">
      <div className="md:w-2/3 lg:w-1/2 w-8/9  p-4 px-7 ">
        <h2 className="text-left text-2xl font-bold">Your To Do</h2>

        <AddInput />
        <Tasks />

        <div className="mt-5">
          <h6>your reminder toodos {numberOfUnfinishedTodos}</h6>
          <p className="text-my-gray font-sans mt-3 text-sm">
            `Doing What you love is the cornestone of having <br /> abundance in
            your life.` - Wayne Dyer
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourToDo;
