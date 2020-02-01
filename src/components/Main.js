import React from 'react';
import TasksList from '../containers/tasks-list';
import NewTask from '../containers/newtask';
const Main =()=>{
    return(<div>   
        <NewTask  />
        <TasksList  />
        
    </div>);
};

export default Main;