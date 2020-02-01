export default function (state=null, action){
    switch(action.type){     
        case "INPUT_CHANGE":
            return action.payload;  
        break;
        default:
            return state; 
    }
} 