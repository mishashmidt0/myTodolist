import React from "react";
import {Checkbox} from "@material-ui/core";
import {changeTaskStatusAC, removeTaskAC, tasksStateType} from "../../store/tasks-reducer";
import s from "./styleTodoList.module.css";
import {EditebleSpan} from "./EditebleSpan";
import {changeTodolistTitleAC} from "../../store/todolist-reducer";
import Button from "@material-ui/core/Button";
import {HighlightOff} from "@material-ui/icons";
import {PropsStyleForTask} from "../../types/PropsStyle";
import {useDispatch, useSelector} from "react-redux";
import style from './styleTodoList.module.css';
import {storeType} from "../../store/redux";
import {isActiveType} from "./Todolist";

type TaskPropsType = {
    todolistId: string
    filter: isActiveType
}

export const Task = React.memo(({todolistId, filter}: TaskPropsType) => {
    console.log('Task')
    const dispatch = useDispatch()
    const tasks = useSelector<storeType, tasksStateType>(store => store.taskReducer)

    let taskForTodolist = tasks[todolistId];

    if (filter === 'active') {
        taskForTodolist = tasks[todolistId].filter((t: PropsStyleForTask) => !t.isDone)
    }
    if (filter === 'completed') {
        taskForTodolist = tasks[todolistId].filter((t: PropsStyleForTask) => t.isDone)
    }
    return (
        <ul>
            {taskForTodolist.map((el: PropsStyleForTask) => {
                return (
                    <li key={el.id} className={style.li}>
                        <Checkbox
                            checked={el.isDone}
                            readOnly={true}
                            onChange={(e) => dispatch(changeTaskStatusAC(todolistId, el.id, e.currentTarget.checked))}
                            className={el.isDone ? s.completeTask : ''}
                        />
                        <EditebleSpan id={el.id} title={el.title} action={changeTodolistTitleAC}/>

                        <Button onClick={() => dispatch(removeTaskAC(el.id, todolistId))}>
                            <HighlightOff color={"primary"}/>
                        </Button>
                    </li>
                )
            })}
        </ul>
    )
})


