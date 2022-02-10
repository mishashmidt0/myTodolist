import React, { useState } from 'react';
import './App.css';
import { PropsStyleForTask, PropsTypeForFilter, TidolistType } from "../../types/PropsStyle";
import { v1 } from 'uuid';
import { Todolist } from '../../components/forApp/Todolist/Todolist';
import { AddItemForm } from "../../components/forApp/Todolist/AddItemForm";


function App () {

	const todolistId1 = v1 ();
	const todolistId2 = v1 ();
	type TaskObjType = { [ key: string ]: PropsStyleForTask[] }
	let [ taskObj, setTaskObj ] = useState<TaskObjType> ( {
		[ todolistId1 ]: [
			{ id: v1 (), title: 'HTML&CSS', type: 'checkbox', isDone: true },
			{ id: v1 (), title: 'TypeScrypt', type: 'checkbox', isDone: false },
			{ id: v1 (), title: 'JavaScrypt', type: 'checkbox', isDone: true },
			{ id: v1 (), title: 'React', type: 'checkbox', isDone: false },
			{ id: v1 (), title: 'Redux', type: 'checkbox', isDone: true },
		],
		[ todolistId2 ]: [
			{ id: v1 (), title: 'React', type: 'checkbox', isDone: false },
			{ id: v1 (), title: 'Angular', type: 'checkbox', isDone: false },
			{ id: v1 (), title: 'Vue', type: 'checkbox', isDone: false },
		],

	} )

	let [ todolists, setTodolist ] = useState<Array<TidolistType>> ( [
		{ id: todolistId1, title: 'My skills', filter: 'all' },
		{ id: todolistId2, title: 'My skills in programm framwork', filter: 'all' },
	] );

	function removeTask ( id: string, todolistId: string ) {
		let tasks = taskObj[ todolistId ];
		taskObj[ todolistId ] = tasks.filter ( ( el ) => el.id !== id )
		setTaskObj ( { ...taskObj } )
	}


	function changeFilter ( value: PropsTypeForFilter, todolistId: string ) {
		let todolist = todolists.find ( tl => tl.id === todolistId );
		if ( todolist ) {
			todolist.filter = value;
			setTodolist ( [ ...todolists ] )
		}
	}

	function addTask ( text: string, todolistId: string ) {
		const newTask: PropsStyleForTask = { id: v1 (), title: text, type: 'checkbox', isDone: false };
		taskObj[ todolistId ] = [ newTask, ...taskObj[ todolistId ] ];
		setTaskObj ( { ...taskObj } )
	}

	function changeStatus ( id: string, isDone: boolean, todolistId: string ) {
		const tasks = taskObj[ todolistId ];
		const task = tasks.find ( ( el ) => id === el.id );
		if ( task ) task.isDone = isDone;
		setTaskObj ( { ...taskObj } )
	}

	function removeTodolist ( todolistId: string ) {
		let filtedTodolist = todolists.filter ( tl => tl.id !== todolistId )
		setTodolist ( filtedTodolist );
		delete taskObj[ todolistId ];
		setTaskObj ( { ...taskObj } )
	}

	function changeTodolistTitle ( id: string, title: string ) {
		const todolist = todolists.find ( ( el ) => el.id === id )
		if ( todolist ) {
			todolist.title = title;
			setTodolist ( [ ...todolists ] )
		}

	}

	function addTodolist ( title: string ) {
		let newTodolist: TidolistType = { id: v1 (), title: title, filter: "all" }

		setTaskObj ( { ...taskObj, [ newTodolist.id ]: [] } )
		setTodolist ( [ newTodolist, ...todolists ] )


	}

	function chengeTaskTitle ( id: string, newTitle: string, todolistId: string ) {
		const tasks = taskObj[ todolistId ];
		const task = tasks.find ( ( el ) => id === el.id );
		if ( task ) task.title = newTitle;
		setTaskObj ( { ...taskObj } )
	}

	return (

		<main className="App">
			<AddItemForm addItem={ addTodolist }/>

			{ todolists.map ( ( tl: TidolistType ) => {

				let taskForTodolist = taskObj[ tl.id ];

				if ( tl.filter === 'active' ) {
					taskForTodolist = taskObj[ tl.id ].filter ( ( t: PropsStyleForTask ) => !t.isDone )
				}
				if ( tl.filter === 'completed' ) {
					taskForTodolist = taskObj[ tl.id ].filter ( ( t: PropsStyleForTask ) => t.isDone )
				}

				return <Todolist
					key={ tl.id }
					id={ tl.id }
					heading={ tl.title }
					task={ taskForTodolist }
					removeTask={ removeTask }
					changeFilter={ changeFilter }
					addTask={ addTask }
					changeIsDoneInputTask={ changeStatus }
					filter={ tl.filter }
					removeTodolist={ removeTodolist }
					chengeTaskTitle={ chengeTaskTitle }
					changeTodolistTitle={ changeTodolistTitle }
				/>
			} ) }

		</main>
	);
}

export default App;



