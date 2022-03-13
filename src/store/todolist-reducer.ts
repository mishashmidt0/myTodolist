import {PropsTypeForFilter, TidolistType} from "../types/PropsStyle";
import {v1} from "uuid";


export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST"
    id: string
}
export type AddTodolistAT = {
    type: 'ADD-TODOLIST'
    title: string
}
export type ChangeTodolistTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
export type ChangeTodolistFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: PropsTypeForFilter
}
export type todolistReducerAT = ChangeTodolistFilterAT | ChangeTodolistTitleAT | AddTodolistAT | RemoveTodolistAT;

export const todolistReducer = (todolist: Array<TidolistType>, action: todolistReducerAT): Array<TidolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todolist.filter((e) => e.id !== action.id)
        case 'ADD-TODOLIST':
            return [...todolist, {id: v1(), title: action.title as string, filter: 'all'}]
        case 'CHANGE-TODOLIST-TITLE':
            return [...todolist.map((e) => e.id === action.id ? {...e, title: action.title as string} : e)]
        case 'CHANGE-TODOLIST-FILTER':
            return [...todolist.map((e) => e.id === action.id ? {
                ...e,
                filter: action.filter as PropsTypeForFilter
            } : e)]
        default:
            return todolist
    }
}

export const RemoveTodolistAC = (id: string): RemoveTodolistAT => {
    return {type: "REMOVE-TODOLIST", id}
}
export const AddTodolistAC = (title: string): AddTodolistAT => {
    return {type: 'ADD-TODOLIST', title}
}
export const ChangeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleAT => {
    return {type: 'CHANGE-TODOLIST-TITLE', id, title}
}
export const ChangeTodolistFilterAC = (id: string, filter: PropsTypeForFilter): ChangeTodolistFilterAT => {
    return {type: 'CHANGE-TODOLIST-FILTER', id, filter}
}
