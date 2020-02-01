import React, {useState, useEffect} from 'react';

export const addTask = (text,input,select)=>{
  
    if((text=="") || (input==null) || (select=="Не выбрано")){
    return {
        type: "ERROR",
        payload: "Не все поля заполнены"
    }}else
    (async () => {
        await fetch('/addtask/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            opi: text,
            pri: input,
            isp: select
        })
        });
        })()    
    return {
        type: "ADD_TASK",
        payload: [{
            opi: text,
            pri: input,
            isp: select
        }]
    }
};