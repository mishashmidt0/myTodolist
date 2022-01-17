import React, { useState } from 'react';
import './App.css';
import { Todolist } from "../../components/forApp/Todolist/Todolist";
import { task1 } from "../../components/forApp/Todolist/dataForTodolist";
import { PropsStyleForTask, PropsTypeForFilter } from "../../types/PropsStyle";
import { v1 } from 'uuid';


function App () {
	let [ tasks, setTasked ] = useState<Array<PropsStyleForTask>> ( task1 )
	let [ filter, setFilter ] = useState<PropsTypeForFilter> ( 'all' )

	function removeTask ( id: string ) {
		setTasked ( tasks.filter ( ( el ) => el.id !== id ) );
	}

	function changeFilter ( value: PropsTypeForFilter ) {
		setFilter ( value );
	}

	function addTask ( text: string ) {
		const newTask: PropsStyleForTask = { id: v1 (), title: text, type: 'checkbox', isDone: false };
		setTasked ( [ newTask, ...tasks ] )
	}

	let taskForTodolist = tasks;

	if ( filter === 'active' ) {
		taskForTodolist = tasks.filter ( t => !t.isDone )
	}
	if ( filter === 'completed' ) {
		taskForTodolist = tasks.filter ( t => t.isDone )
	}

	return (
		<div>
			<Todolist heading={ 'My skills' } task={ taskForTodolist } removeTask={ removeTask } changeFilter={ changeFilter } addTask={addTask}/>
		</div>
	);
}

export default App;
