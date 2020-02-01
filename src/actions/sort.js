export const sortTasks = (tasks)=>{
    
    tasks.sort((a, b) => +a.pri > +b.pri ? -1 : 1);
    
    return {
        type: "SORT_TASK",
        payload: tasks
    }
};