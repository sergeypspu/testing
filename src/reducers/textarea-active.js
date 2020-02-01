export default function (state=null, action){
    switch(action.type){     
        case "TEXTAREA_CHANGE":
            return action.payload;  
        break;
        default:
            return state; 
    }
} 