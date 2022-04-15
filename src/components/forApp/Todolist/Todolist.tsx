import React, {useState} from "react";
import {PropsStyleForTask, PropsStyleForTodolist, TidolistType} from "../../../types/PropsStyle";
import s from './styleTodoList.module.css';
import {AddItemForm} from "./AddItemForm";
import {EditebleSpan} from "./EditebleSpan";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {DeleteOutline, HighlightOff} from "@material-ui/icons";
import {Checkbox} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../store/redux";
import {
    changeTaskStatusAC,
    removeTaskAC,
    tasksStateType
} from "../../../store/tasks-reducer";


type isActiveType = 'all' | 'active' | 'completed';

export function Todolist({id}: PropsStyleForTodolist) {

    const dispatch = useDispatch()
    const tasks = useSelector<storeType, tasksStateType>(store => store.taskReducer)
    const todolists = useSelector<storeType, Array<TidolistType>>(store => store.todolistReducer)
    const [isActive, setActive] = useState<isActiveType>('all')
    const todo = todolists.filter((el) => el.id == id)[0]

    let taskForTodolist = tasks[id];

    if (todo.filter === 'active') {
        taskForTodolist = tasks[id].filter((t: PropsStyleForTask) => !t.isDone)
    }
    if (todo.filter === 'completed') {
        taskForTodolist = tasks[id].filter((t: PropsStyleForTask) => t.isDone)
    }

    return (<div className="App">
        <div>
            <h3>
                <EditebleSpan id={id} title={todo.title}/>

                <Button onClick={() => {
                    // dispatch(removeTaskAC(id, tasks.id))
                }}><DeleteOutline/>
                </Button>
            </h3>

            <AddItemForm/>

            <ul>
                {taskForTodolist.map((el) => {

                    return (<li key={el.id}>
                        <Checkbox
                            checked={el.isDone}
                            readOnly={true}
                            onChange={(e) => dispatch(changeTaskStatusAC(el.id, id, e.currentTarget.checked))}
                            className={el.isDone ? s.completeTask : ''}
                        />
                        <EditebleSpan id={id} title={el.title}/>

                        <Button onClick={() => dispatch(removeTaskAC(id, el.id))}><HighlightOff
                            color={"primary"}/></Button>
                    </li>);
                })}
            </ul>
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">

                    <Button variant={isActive === 'all' ? 'contained' : 'text'}
                            onClick={() => setActive('all')}>All</Button>

                    <Button variant={isActive === 'active' ? 'contained' : 'text'}
                            onClick={() => setActive('active')}>Active</Button>

                    <Button variant={isActive === 'completed' ? 'contained' : 'text'}
                            onClick={() => setActive('completed')}>Completed</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>);
}

