import {TidolistType} from "../types/PropsStyle";
import {v1} from "uuid";


export type todolistReducerAT = {
    type: "REMOVE-TODOLIST" | 'ADD-TODOLIST' | 'CHANGE-TODOLIST-TITLE'
    id: string
    title?: string
}


export const todolistReducer = (todolist: Array<TidolistType>, action: todolistReducerAT): Array<TidolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return todolist.filter((e) => e.id !== action.id)
        case 'ADD-TODOLIST':
            return [...todolist, {id: v1(), title: action.title as string, filter: 'all'}]
        case 'CHANGE-TODOLIST-TITLE':
            return [...todolist.map((e) => e.id === action.id ? {...e, title: action.title as string} : e)]
        default:
            return todolist
    }
}
