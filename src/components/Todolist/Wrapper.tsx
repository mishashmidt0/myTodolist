import React from "react";
import {Grid} from "@material-ui/core";

import {Todolist} from "./Todolist";


export const Wrapper = React.memo(() => {
    console.log('Wrapper')
    return (
        <Grid container spacing={5}>
            <Todolist/>
        </Grid>
    )
})
