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

export type PropsStyleForTodolist = {
    id: string,
    heading: string,
    task: Array<PropsStyleForTask>,
    removeTask: (el: string, id: string) => void;
    changeFilter: (value: PropsTypeForFilter, todolistId: string) => void;
    addTask: (text: string, id: string) => void;
    changeIsDoneInputTask: (id: string, isDone: boolean, todolistId: string) => void
    chengeTaskTitle: (id: string, value: string, todolistId: string) => void
    filter: PropsTypeForFilter;
    removeTodolist: (todolistId: string) => void;
    changeTodolistTitle: (newTitle: string, id: string) => void
}
export type AddItemFormPropsType = {
    addItem: (title: string) => void;
}
export type EditebleSpanPropsType = {
    title: string
    onChange: (title: string) => void
}
