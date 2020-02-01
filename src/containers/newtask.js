import React from "react";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addChange} from '../actions/inputchange';
import {addChanget} from '../actions/textareachange';
import {addSelect} from '../actions/addselect';
import {addTask} from '../actions/addtask';
import {setUsers} from '../actions/setusers';
import {useStyles} from '../style/stylejss';
const NewTask = () => {
    const classes = useStyles();
    const input = useSelector(state => state.input);
    const textarea = useSelector(state => state.textarea);
    const select = useSelector(state => state.select);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();  
    
    async function getUser(){
            let response = await fetch(`/users/`);
            let data = await response.json()
            return data;
        }   
    function usersList(){
        getUser()
            .then(user => dispatch(setUsers(user)));
        return users.map ((user)=>{
            return (
            <option value={user.name}>{user.name}</option>
            );
        });
    }
    return (
        <main>
            <div className={classes.divAddTask}>
            <textarea className={classes.addTextArea}  onChange={(event)=>dispatch(addChanget((event.target.value)))}>Описание</textarea>
            <select className={classes.addSelect} onChange={(event)=>dispatch(addSelect((event.target.value)))}>
            <option>Не выбрано</option>
            {usersList()}
            </select>
            <input type={"number"}className={classes.addInput} onChange={(event)=>dispatch(addChange((event.target.value)))}></input>
            <button className={classes.addButton} onClick={()=>dispatch(addTask(textarea,input,select))}>Добавить задачу</button>
            </div>
        </main>
    );
  };
  export  default NewTask;
