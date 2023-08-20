import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Images } from "../../assets/img/image";
import AppContext from "../../context";
import TaskCard from "./TaskCard";

interface Props {
  isDeleting?: boolean;
}

const TaskListing: React.FC<Props> = ({ isDeleting = false }) => {
  const { allTasks, deleteTasks } = useContext(AppContext);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const handleToggleChecked = (taskId: number) => {
    setCheckedIds((prevIds) => {
      if (prevIds.includes(taskId)) {
        return prevIds.filter((id) => id !== taskId);
      } else {
        return [...prevIds, taskId];
      }
    });
  };

  const handleDelete = () => {
    deleteTasks(checkedIds);
    setCheckedIds([]);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-2">
        {allTasks.map(({ id, ...rest }) => (
          <div className="min-h-[100px]" key={id}>
            <TaskCard
              {...rest}
              taskId={id}
              imageSrc={Images[id % Images.length]}
              isDeleting={isDeleting}
              isChecked={checkedIds.includes(id)}
              onToggleChecked={() => handleToggleChecked(id)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        {isDeleting && (
          <button
            type="submit"
            disabled={!checkedIds.length}
            onClick={handleDelete}
            className="btn-bulk-delete"
          >
            <FaTrash className="text-xs md:text-sm mr-1" />
            <span className="hidden md:inline">Delete</span>
          </button>
        )}
      </div>
    </>
  );
};

export default TaskListing;
