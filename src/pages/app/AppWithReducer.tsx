import React, {useReducer} from 'react';
import './App.css';
import {PropsStyleForTask, PropsTypeForFilter, TidolistType} from "../../types/PropsStyle";
import {v1} from 'uuid';
import {Todolist} from '../../components/forApp/Todolist/Todolist';
import {AddItemForm} from "../../components/forApp/Todolist/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistReducer
} from "../../store/todolist-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "../../store/tasks-reducer";


function AppWithReducer() {

    const todolistId1 = v1();
    const todolistId2 = v1();


    let [ObjTasks, dispatchTasksReducer] = useReducer(taskReducer, {
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'TypeScrypt', isDone: false},
            {id: v1(), title: 'JavaScrypt', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Angular', isDone: false},
            {id: v1(), title: 'Vue', isDone: false},
        ],

    })

    let [todolists, dispatchTodolistsReducer] = useReducer(todolistReducer, [
        {id: todolistId1, title: 'My skills', filter: 'all'},
        {id: todolistId2, title: 'My skills in programm framwork', filter: 'all'},
    ]);

    function removeTask(id: string, todolistId: string) {
        dispatchTasksReducer(removeTaskAC(id, todolistId))
    }

    function changeTodolistFilter(filter: PropsTypeForFilter, todolistId: string) {
        dispatchTodolistsReducer(changeTodolistFilterAC(todolistId, filter))
    }

    function addTask(text: string, todolistId: string) {
        dispatchTasksReducer(addTaskAC(todolistId, text))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatchTasksReducer(changeTaskStatusAC(todolistId, id, isDone))
    }

    function removeTodolist(todolistId: string) {
        dispatchTodolistsReducer(removeTodolistAC(todolistId))
    }

    function changeTodolistTitle(id: string, title: string) {
        dispatchTodolistsReducer(changeTodolistTitleAC(id, title))
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title)
        dispatchTodolistsReducer(action)
        dispatchTasksReducer(action)
    }

    function chengeTaskTitle(id: string, newTitle: string, todolistId: string) {
        dispatchTasksReducer(changeTaskTitleAC(todolistId, id, newTitle))

    }


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
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={5}>
                    {todolists.map((tl: TidolistType) => {

                        let taskForTodolist = ObjTasks[tl.id];

                        if (tl.filter === 'active') {
                            taskForTodolist = ObjTasks[tl.id].filter((t: PropsStyleForTask) => !t.isDone)
                        }
                        if (tl.filter === 'completed') {
                            taskForTodolist = ObjTasks[tl.id].filter((t: PropsStyleForTask) => t.isDone)
                        }
                        return <Grid item key={tl.id}>
                            <Paper style={{padding: '10px'}}>
                                <Todolist
                                    key={tl.id}
                                    id={tl.id}
                                    heading={tl.title}
                                    task={taskForTodolist}
                                    removeTask={removeTask}
                                    changeFilter={changeTodolistFilter}
                                    addTask={addTask}
                                    changeIsDoneInputTask={changeStatus}
                                    filter={tl.filter}
                                    removeTodolist={removeTodolist}
                                    chengeTaskTitle={chengeTaskTitle}
                                    changeTodolistTitle={changeTodolistTitle}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>


            </Container>
        </div>
    )
        ;
}

export default AppWithReducer;



