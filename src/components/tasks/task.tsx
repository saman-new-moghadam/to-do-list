import useStateData from "@/context/useStateData";

const Task = ({
  title,
  id,
}: {
  title: string;
  isCompleted: boolean;
  id: string;
}) => {
  const { tasks, changeCompleteStatus, deleteTask } = useStateData();

  return (
    <div
      className="
            mt-4 p-3 border 
            border-my-gray 
            rounded-xl flex
            justify-between 
            
            "
    >
      <div className="flex items-center mx-3 gap-5">
        <input
          onChange={() => changeCompleteStatus(id)}
          checked={tasks[id]?.isCompleted}
          type="checkbox"
          style={{ width: "20px", height: "20px" }}
        />
        <p className="text-sm">{title}</p>
      </div>
      <div
        onClick={() => {
          deleteTask(id);
        }}
        className="mx-3 text-2xl cursor-pointer"
      >
        ×
      </div>
    </div>
  );
};

export default Task;
