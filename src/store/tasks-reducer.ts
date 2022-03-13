import {PropsStyleForTask, PropsTypeForFilter, TidolistType} from "../types/PropsStyle";
import {v1} from "uuid";

const remove = "REMOVE-TODOLIST"
const add = 'ADD-TODOLIST'
const changeTitle = 'CHANGE-TODOLIST-TITLE'
const changeIsDone = 'CHANGE-TODOLIST-FILTER'


export type RemoveTaskAT = {
    type: "REMOVE-TODOLIST"
    id: string
    idTodolist: string
}
export type AddTaskAT = {
    type: 'ADD-TODOLIST'
    idTodolist: string
    title: string
}
export type ChangeTaskTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    idTodolist: string
    id: string
    title: string
}
export type ChangeTaskIsDoneAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    idTodolist: string
    id: string
    isDone: boolean
}
export type taskReducerAT = RemoveTaskAT | AddTaskAT | ChangeTaskTitleAT | ChangeTaskIsDoneAT;

export const taskReducer = (task: { [key: string]: PropsStyleForTask[] }, action: taskReducerAT): { [key: string]: PropsStyleForTask[] } => {
    switch (action.type) {
        case remove:
            return {...task, [action.idTodolist]: task[action.idTodolist].filter((e) => e.id !== action.id)}
        case add:
            return {
                ...task,
                [action.idTodolist]: [...task[action.idTodolist], {
                    id: v1(),
                    title: action.title as string,
                    isDone: false
                }]
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

        case changeIsDone:
            return {
                ...task,
                [action.idTodolist]: task[action.idTodolist].map(t => t.id === action.id ? {
                        ...t,
                        isDone: action.isDone
                    } : t
                )
            }
        default:
            return task
    }
}

export const removeTaskAC = (id: string, idTodolist: string): RemoveTaskAT => {
    return {type: "REMOVE-TODOLIST", id, idTodolist}
}
export const addTaskAC = (idTodolist: string, title: string): AddTaskAT => {
    return {type: 'ADD-TODOLIST', idTodolist, title}
}
export const changeTaskTitleAC = (idTodolist: string, id: string, title: string): ChangeTaskTitleAT => {
    return {type: 'CHANGE-TODOLIST-TITLE', idTodolist, id, title}
}
export const changeTaskIsDoneAC = (idTodolist: string, id: string, isDone: boolean): ChangeTaskIsDoneAT => {
    return {type: 'CHANGE-TODOLIST-FILTER', idTodolist, id, isDone}
}
