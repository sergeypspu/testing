export default function (state=[], action){
    switch(action.type){     
        case "SET_USERS":
            return action.payload;  
        break;
        default: 
            return state; 
    }
} 