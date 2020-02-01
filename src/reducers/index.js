import {combineReducers} from 'redux';
import TasksRedusers from './task';
import InputActive from './input-active';
import UsersRedusers from './users';
import AddSelectChange from './select-active';
import TextAreaActive from './textarea-active';

const allReducers=combineReducers ({
    tasks: TasksRedusers,
    input: InputActive,
    textarea: TextAreaActive,
    select: AddSelectChange,
    users: UsersRedusers
});

export default allReducers;