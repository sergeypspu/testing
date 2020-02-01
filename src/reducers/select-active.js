export default function (state=null, action){
    switch(action.type){     
        case "ADD_SELECT":
            return action.payload;  
        break;
        default:
            return state; 
    }
} 