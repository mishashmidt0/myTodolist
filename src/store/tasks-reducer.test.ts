import {v1} from "uuid";
import {PropsStyleForTask} from "../types/PropsStyle";
import {addTaskAC, changeTaskIsDoneAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "./tasks-reducer";

let startState: { [key: string]: PropsStyleForTask[] }
let todolistId1: string
let todolistId2: string


beforeEach(() => {
    todolistId1 = v1();
    todolistId2 = v1();

    startState = {
        [todolistId1]: [
            {id: '1', title: 'HTML&CSS', isDone: true},
            {id: '2', title: 'TypeScrypt', isDone: false},
            {id: '3', title: 'JavaScrypt', isDone: true},
            {id: '4', title: 'React', isDone: false},
            {id: '5', title: 'Redux', isDone: true},
        ],
        [todolistId2]: [
            {id: '2', title: 'React', isDone: false},
            {id: '3', title: 'Angular', isDone: false},
            {id: '4', title: 'Vue', isDone: false},
        ]
    }
})


test('correct tasks should be removed', () => {


    const endState = taskReducer(startState, removeTaskAC('2', todolistId1))

    expect(endState[todolistId1].length).toBe(4);
    expect(endState[todolistId2].length).toBe(3);
    expect((endState[todolistId1]).every(t => t.id != '2')).toBeTruthy();

})

test('correct task should add item', () => {


    let newTextTitle = 'New text'
    const endState = taskReducer(startState, addTaskAC(todolistId1, newTextTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTextTitle);
    expect(endState[2].isDone).toBe(false);

})

test('correct todolist should change it is name', () => {


    let newTextTitle = 'New text'

    const endState = taskReducer(startState, changeTaskTitleAC(task1, newTextTitle))

    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe(newTextTitle);
    expect(endState[1].title).toBe("What to by");
    expect(endState[0].isDone).toBe(false);

})

test('correct todolist should change isDone', () => {


    const endState = taskReducer(startState, changeTaskIsDoneAC(task1, true))

    expect(endState.length).toBe(2);
    expect(endState[0].isDone).toBe(true);
    expect(endState[1].isDone).toBe(false);

})
