import React, {useState} from "react";
import {TidolistType} from "../../types/PropsStyle";
import {AddItemForm} from "./AddItemForm";
import {EditebleSpan} from "./EditebleSpan";
import Button from "@material-ui/core/Button";
import {DeleteOutline} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../store/redux";
import {addTaskAC,} from "../../store/tasks-reducer";
import {changeTodolistTitleAC, removeTodolistAC} from "../../store/todolist-reducer";
import {Task} from "./Task";
import {FilterButton} from "./FilterButton";
import {Paper, Grid} from "@material-ui/core";


export type isActiveType = 'all' | 'active' | 'completed';

export const Todolist = React.memo(() => {

    console.log('Todolist')
    const dispatch = useDispatch()
    const todolists = useSelector<storeType, Array<TidolistType>>(store => store.todolistReducer)

    const [isActive, setActive] = useState<isActiveType>('all')

    return (
        <div>
            <Grid item>
                <Paper style={{padding: '10px'}}>

                    {todolists.map((todolist: TidolistType, index) => {
                        debugger
                        return (<div key={index}>
                                <h3>
                                    <EditebleSpan id={todolist.id} title={todolist.title}
                                                  action={changeTodolistTitleAC}/>

                                    <Button onClick={() => {
                                        dispatch(removeTodolistAC(todolist.id))
                                    }}>
                                        <DeleteOutline/>
                                    </Button>
                                </h3>

                                <AddItemForm id={todolist.id} action={addTaskAC}/>

                                <Task todolistId={todolist.id} filter={isActive}/>

                                <FilterButton filter={isActive} setFilter={setActive}/>
                            </div>
                        )
                    })}
                </Paper>
            </Grid>)
        </div>)
})

