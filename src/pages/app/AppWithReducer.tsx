import React from 'react';
import './App.css';
import {PropsStyleForTask, TidolistType} from "../../types/PropsStyle";
import {Todolist} from '../../components/forApp/Todolist/Todolist';
import {AddItemForm} from "../../components/forApp/Todolist/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from "@material-ui/icons";
import {
    tasksStateType
} from "../../store/tasks-reducer";
import {useSelector} from "react-redux";
import {storeType} from "../../store/redux";
import {v1} from "uuid";
import {addTodolistAC} from "../../store/todolist-reducer";


function AppWithReducer() {
    const todolists = useSelector<storeType, Array<TidolistType>>(store => store.todolistReducer)

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm id={v1()} action={addTodolistAC}/>
                </Grid>


                <Grid container spacing={5}>
                    {todolists.map((tl: TidolistType) => {
                        return <Grid item key={tl.id}>
                            <Paper style={{padding: '10px'}}>
                                <Todolist
                                    key={tl.id}
                                    id={tl.id}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>


            </Container>
        </div>
    );
}

export default AppWithReducer;



