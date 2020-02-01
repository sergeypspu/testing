import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {countPri} from '../actions/countpri';
import {deleteTask} from '../actions/deletetask';
import {sortTasks} from '../actions/sort';
import {setTasks} from '../actions/settasks';
import {useStyles} from '../style/stylejss';
const TasksList =  () =>  {
    const classes = useStyles();
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    
    function check(pri, index, tasks){
        let max=Math.max.apply(null,tasks.map((task)=>{return (task.pri)}));
        let min=Math.min.apply(null,tasks.map((task)=>{return (task.pri)}));
        if(pri==max)
            return(<button className={classes.buttonListRight} onClick={()=>dispatch(countPri(pri,index,"-"))}>Понизить приоритет</button>)
        if(pri==min)
            return(<button className={classes.buttonListRight} onClick={()=>dispatch(countPri(pri,index,"+"))}>Повысить приоритет</button>)
        return(<><button className={classes.buttonList} onClick={()=>dispatch(countPri(pri,index,"+"))}>Повысить приоритет</button><button className={classes.buttonListRight} onClick={()=>dispatch(countPri(pri,index,"-"))}>Понизить приоритет</button></>)    
    }
    async function getTask(){
        let response = await fetch(`/tasks/`);
        let data = await response.json()
        return data;
    } 
     function showList() {  
        getTask()
        .then(task => dispatch(setTasks(task)));
     //dispatch(sortTasks(tasks));  
        return tasks.map ((task, index)=>{
            return (<div className={classes.divTasksList}>
            <p className={classes.pText}>{task.opi}</p>
            <p className={classes.pName}>{task.isp}</p>
                <div className={classes.divButtonListP}>
                    <p className={classes.pCount}>{task.pri}</p> 
                    <div className={classes.divButtonList}>
                        <button className={classes.buttonList} onClick={()=>dispatch(deleteTask(index))}>Удалить</button>
                        {check(task.pri, index, tasks)}
                    </div>
                </div>
            </div>
            );
        });
    }
    return (
        <main>
        <div>
              {showList()}
        </div>
        </main>
    );
  };
  export  default TasksList;
