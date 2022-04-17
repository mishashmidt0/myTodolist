import React, {useState} from "react";
import {TidolistType} from "../../types/PropsStyle";
import {AddItemForm} from "./AddItemForm";
import {EditebleSpan} from "./EditebleSpan";
import Button from "@material-ui/core/Button";
import {DeleteOutline} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC,} from "../../store/tasks-reducer";
import {addTodolistAC, changeTodolistTitleAC, removeTodolistAC} from "../../store/todolist-reducer";
import {Task} from "./Task";
import {FilterButton} from "./FilterButton";
import {storeType} from "../../store/redux";
import {v1} from "uuid";
import {itemReducerType} from "../../store/change-reducer";


export type isActiveType = 'all' | 'active' | 'completed';

export const Todolist = React.memo(() => {
    console.log('Todolist')
    const dispatch = useDispatch()
    const [isActive, setActive] = useState<isActiveType>('all')
    const todolists = useSelector<storeType, Array<TidolistType>>((store) => store.todolistReducer)
    const item = useSelector<storeType, itemReducerType>((store) => store.itemReducer)

    return (<div>
            {todolists.map((todolist) => {
                return (
                    <div key={v1()}>
                        <h3>
                            <EditebleSpan id={todolist.id} title={todolist.title} action={changeTodolistTitleAC}/>

                            <Button onClick={() => {
                                dispatch(removeTodolistAC(todolist.id))
                            }}>
                                <DeleteOutline/>
                            </Button>
                        </h3>

                        <AddItemForm id={todolist.id} action={()=>dispatch(addTodolistAC(todolist.id, item.title))}/>

                        <Task todolistId={todolist.id} filter={isActive}/>

                        <FilterButton filter={isActive} setFilter={setActive}/>
                    </div>)
            })

            }</div>
    )
})

