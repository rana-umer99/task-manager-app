import React from "react";
import { Checkbox } from "@mui/material";

interface Props {
  label: string;
  description: string;
  isCompleted: boolean;
  taskId: number;
  isChecked: boolean;
  isDeleting?: boolean;
  imageSrc: string;
  onToggleChecked: () => void;
}

const TaskCard: React.FC<Props> = ({
  taskId,
  label,
  description,
  imageSrc,
  isDeleting,
  isChecked,
  onToggleChecked,
  isCompleted,
}) => {
  return (
    <div
      className="card-container"
      onClick={onToggleChecked}
    >
      <div className="flex-shrink-0">
        <img src={imageSrc} alt="Person" className="w-16 h-16 rounded-full" />
      </div>
      <div className="ml-4 flex-grow">
        <h3
          className="c-title"
          title={label}
        >
          {label}
        </h3>
        <p
          className="c-description"
          title={description}
        >
          {description}
        </p>
      </div>
      {isDeleting && (
        <Checkbox
          className="absolute top-2 right-2"
          checked={isChecked}
          color="primary"
        />
      )}
    </div>
  );
};

export default TaskCard;
