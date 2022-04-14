import {PropsStyleForTask} from "../types/PropsStyle";
import {v1} from "uuid";
import {AddTodolistAT, RemoveTodolistAT} from "./todolist-reducer";

const remove = "REMOVE-TASK"
const removeTodolist = "REMOVE-TODOLIST"
const add = 'ADD-TASK'
const addTodolist = 'ADD-TODOLIST'
const changeTitle = 'CHANGE-TASK-TITLE'
const changeStatus = 'CHANGE-TASK-FILTER'


export type RemoveTaskAT = {
    type: "REMOVE-TASK"
    id: string
    idTodolist: string
}
export type AddTaskAT = {
    type: 'ADD-TASK'
    idTodolist: string
    title: string
}
export type ChangeTaskTitleAT = {
    type: 'CHANGE-TASK-TITLE'
    idTodolist: string
    id: string
    title: string
}
export type ChangeTaskStatusAT = {
    type: 'CHANGE-TASK-FILTER'
    idTodolist: string
    id: string
    isDone: boolean
}
export type taskReducerAT =
    RemoveTaskAT
    | AddTaskAT
    | ChangeTaskTitleAT
    | ChangeTaskStatusAT
    | AddTodolistAT
    | RemoveTodolistAT;

export const taskReducer = (task: { [key: string]: PropsStyleForTask[] }, action: taskReducerAT): { [key: string]: PropsStyleForTask[] } => {
    switch (action.type) {
        case remove:
            return {...task, [action.idTodolist]: task[action.idTodolist].filter((e) => e.id !== action.id)}
        case add:
            return {
                ...task,
                [action.idTodolist]: [{
                    id: v1(),
                    title: action.title as string,
                    isDone: false
                }, ...task[action.idTodolist]]
            }
        case changeTitle:
            return {
                ...task,
                [action.idTodolist]: task[action.idTodolist].map(t => t.id === action.id ? {
                        ...t,
                        title: action.title
                    } : t
                )
            }

        case changeStatus:
            return {
                ...task,
                [action.idTodolist]: task[action.idTodolist].map(t => t.id === action.id ? {
                        ...t,
                        isDone: action.isDone
                    } : t
                )
            }
        case addTodolist:
            return {
                ...task,
                [action.id]: []
            }
        case removeTodolist:
            const stateCope = {...task}
            delete stateCope[action.id]
            return {
                ...stateCope
            }
        default:
            return task
    }
}

export const removeTaskAC = (id: string, idTodolist: string): RemoveTaskAT => {
    return {type: remove, id, idTodolist}
}
export const addTaskAC = (idTodolist: string, title: string): AddTaskAT => {
    return {type: add, idTodolist, title}
}
export const changeTaskTitleAC = (idTodolist: string, id: string, title: string): ChangeTaskTitleAT => {
    return {type: changeTitle, idTodolist, id, title}
}
export const changeTaskStatusAC = (idTodolist: string, id: string, isDone: boolean): ChangeTaskStatusAT => {
    return {type: changeStatus, idTodolist, id, isDone}
}

