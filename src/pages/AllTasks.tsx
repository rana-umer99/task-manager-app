import React, { useContext, useEffect } from 'react';
import TaskListing from '../components/common/TaskListing';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context';

const AllTasks = () => {
    const navigate = useNavigate();
    const { allTasks, setToast } = useContext(AppContext);

    useEffect(() => {
        if (!allTasks.length) {
            setToast("No task to display..! Please add one");
            navigate("/create-task");
        }
    }, [allTasks]);

    return (
        
        <div className='pl-6 pr-6 mx-auto py-8'>
            <h2 className="text-2xl font-semibold mb-4">List of Tasks</h2>
            <TaskListing />
        </div>
    );
};

export default AllTasks;