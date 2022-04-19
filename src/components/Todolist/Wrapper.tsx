import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {Todolist} from "./Todolist";
import {useSelector} from "react-redux";
import {storeType} from "../../store/redux";
import {TidolistType} from "../../types/PropsStyle";

export const Wrapper = React.memo(() => {
    const todolists = useSelector<storeType, Array<TidolistType>>((store) => store.todolistReducer)
    console.log('Wrapper')

    return (
        <Grid container spacing={5}>
            {todolists.map((todolist) => {
                return (
                    <Grid item key={todolist.id}>
                        <Paper style={{padding: '10px'}}>
                            <Todolist todolist={todolist}/>
                        </Paper>
                    </Grid>)
            })}
        </Grid>
    )
});
