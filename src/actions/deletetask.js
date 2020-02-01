export const deleteTask = (index)=>{
    (async () => {
        await fetch('/deletetask/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            index: index
        })
        });
        })()    
    return {
        type: "DELETE_TASK",
        payload: {index}
    }
};