import React from 'react';
import { Card, CardContent, Typography, Checkbox, Box } from '@mui/material';

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

const TaskCard: React.FC<Props> = ({ taskId, label, description, imageSrc, isDeleting, isChecked, onToggleChecked, isCompleted }) => {
    return (
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 flex items-center relative min-h-full overflow-hidden" onClick={onToggleChecked}>
        
                <div className="flex-shrink-0">
                    <img
                    src={imageSrc}
                    alt="Person"    
                    className="w-16 h-16 rounded-full"
                    />
                </div>
                <div className="ml-4 flex-grow">
                    <h3 className="text-gray-800 text-lg font-semibold leading-5 overflow-hidden line-clamp-2 max-h-16 mb-1" title={label}>{label}</h3>
                    <p className="text-gray-600 leading-5 overflow-hidden line-clamp-2 max-h-20" title={description}>{description}</p>
                    {/* <p className="text-sm text-gray-400 mt-2">Time: {task.time}</p> */}
                    {/* <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        isChecked={taskId)}
                        onToggleChecked={() => handleToggleChecked(id)
                    /> */}
                </div>
                {isDeleting && <Checkbox className='absolute top-2 right-2' checked={isChecked} color="primary" />}
            </div>
    );
};

export default TaskCard;
