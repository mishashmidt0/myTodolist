import React, {useCallback, useState} from "react";
import {TidolistType} from "../../types/PropsStyle";
import {AddItemForm} from "./AddItemForm";
import {EditebleSpan} from "./EditebleSpan";
import Button from "@material-ui/core/Button";
import {DeleteOutline} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, tasksStateType,} from "../../store/tasks-reducer";
import {changeTodolistTitleAC, removeTodolistAC} from "../../store/todolist-reducer";
import {Tasks} from "./Tasks";
import {FilterButton} from "./FilterButton";
import {storeType} from "../../store/redux";


export type isActiveType = 'all' | 'active' | 'completed';
type todolistTypeProps = {
    todolist: TidolistType
}
export const Todolist = React.memo(({todolist}: todolistTypeProps) => {

    console.log('Todolist')

    const dispatch = useDispatch()
    const todolistTasks = useSelector<storeType, tasksStateType>(store => store.taskReducer)
    const [isActive, setActive] = useState<isActiveType>('all')


    const dispatchChangeTodolistTitle = useCallback((id, title) => {
        dispatch(changeTodolistTitleAC(id, title))
    }, [dispatch])
    const dispatchAddTask = useCallback((title) => {
        dispatch(addTaskAC(todolist.id, title))
    }, [dispatch])
    const dispatchRemoveTodolist = useCallback((todolistId) => {
        dispatch(removeTodolistAC(todolistId))
    }, [dispatch])

    return (<div>
        <h3>
            <EditebleSpan id={todolist.id} title={todolist.title}
                          dispatch={dispatchChangeTodolistTitle}/>

            <Button onClick={() => {
                dispatchRemoveTodolist(todolist.id)
            }}>
                <DeleteOutline/>
            </Button>
        </h3>

        <AddItemForm dispatch={dispatchAddTask}/>

        <ul>
            <Tasks todolistId={todolist.id} tasks={todolistTasks} filter={isActive}/>
        </ul>

        <FilterButton filter={isActive} setFilter={setActive}/>
    </div>)
})

