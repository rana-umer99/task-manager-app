import React from "react";
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
}) => {
  return (
    <div className="card-container">
      <div className="flex-shrink-0">
        <img src={imageSrc} alt="Person" className="w-16 h-16 rounded-full" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="c-title" title={label}>
          {label}
        </h3>
        <p className="c-description" title={description}>
          {description}
        </p>
      </div>
      {isDeleting && (
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="absolute top-2 right-2"
          checked={isChecked}
          onChange={onToggleChecked}
        />
      )}
    </div>
  );
};

export default TaskCard;
