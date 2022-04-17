import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {Todolist} from "./Todolist";

export const Wrapper = React.memo(() => {
    console.log('Wrapper')

    return (
        <Grid container spacing={5}>
            <Grid item>
                <Paper style={{padding: '10px'}}>
                    <Todolist/>)}
                </Paper>
            </Grid>
        </Grid>
    )
});
