import React from 'react';
import './App.css';
import {AddItemForm} from "../components/Todolist/AddItemForm";
import {Container} from '@material-ui/core';
import {v1} from "uuid";
import {addTodolistAC} from "../store/todolist-reducer";
import {Header} from "../components/Todolist/Header";
import {Wrapper} from "../components/Todolist/Wrapper";


function App() {
    return (
        <div>
            <Header/>

            <Container fixed>

                <AddItemForm id={v1()} action={addTodolistAC}/>

                <Wrapper/>

            </Container>
        </div>
    );
}

export default App;



