import React, { useContext, useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import AppContext from '../../context';
import TaskCard from './TaskCard';

interface Props {
    isDeleting?: boolean;
};

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

    const imageSources = [
        require('../../assets/img/1.jpg',),
        require('../../assets/img/2.jpg',),
        require('../../assets/img/3.jpg',),
        require('../../assets/img/4.jpg',),
        require('../../assets/img/5.jpg',)
    ];
    console.log(imageSources);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allTasks.map(({ id, ...rest }) => (
                    <div className="min-h-[100px]" key={id}>
                        <TaskCard
                            {...rest}
                            taskId={id}
                            imageSrc={imageSources[id % imageSources.length]}
                            isDeleting={isDeleting}
                            isChecked={checkedIds.includes(id)}
                            onToggleChecked={() => handleToggleChecked(id)
                            }
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center w-full pb-7'>
                {isDeleting &&
                    <Button
                        variant="contained"
                        color="warning"
                        type="submit"
                        sx={{ mt: "2rem" }}
                        disabled={!checkedIds.length}
                        onClick={handleDelete}
                        className='flex items-center justify-center space-x-1 w-40'
                    >
                        <FaTrash className="text-xs md:text-sm mr-1" />
                        <span className="hidden md:inline">Delete</span>
                    </Button>
                }
            </div>
        </>    
    );
};

export default TaskListing;