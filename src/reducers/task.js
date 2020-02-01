export default function (state=[], action){
    switch(action.type){     
        case "ADD_TASK":
            return state.concat(action.payload);  
        break;
        case "SET_TASKS":
            return action.payload;  
        break;
        case "SORT_TASK":
            return action.payload;  
        break;
        case "DELETE_TASK":
            return state.filter((task,index)=>index!=action.payload.index)  
        break;
        case "COUNT_PRI":
            return state.map((task,index)=>{
                if(index==action.payload.index){
                    task.pri=action.payload.pri;
                    return task;
                }
                    return task;
              }); 
        break;
        default: 
            return state; 
    }
} 