export type PropsStyleForTask = {
    id: string,
    title: string,
    isDone: boolean
}
export type TidolistType = {
    id: string,
    title: string,
    filter: PropsTypeForFilter;
}
export type PropsTypeForFilter = 'all' | 'active' | 'completed'
export type TaskObjType = { [key: string]: PropsStyleForTask[] }
export type PropsStyleForTodolist = {
    id: string,
}
export type AddItemFormPropsType = {
    todolistId: string
}
export type EditebleSpanPropsType = {
    title: string
    id: string
}
