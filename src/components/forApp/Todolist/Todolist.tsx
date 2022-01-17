import React, { useState } from "react";
import { PropsStyleForTodolist } from "../../../types/PropsStyle";


export function Todolist ( props: PropsStyleForTodolist ) {

	const [ newTextArea, setTextArea ] = useState ( '' )
	function addTask(){
	props.addTask(newTextArea);
		setTextArea('')
	}

	return (
		<div className="App">
			<div>
				<h3>{ props.heading }</h3>
				<div>
					<input onChange={ ( el ) => setTextArea ( el.currentTarget.value ) } value={ newTextArea }/>
					<button onClick={ addTask }>+</button>
				</div>
				<ul>
					{ props.task.map ( ( el ) => {
						return ( <li key={el.id}> <input type={ el.type } checked={ el.isDone } readOnly={true}/><span>{ el.title }</span>
								<button onClick={ () => props.removeTask ( el.id ) }>x</button>
							</li>
						)
					} ) }
				</ul>
				<div>
					<button onClick={ () => props.changeFilter ( 'all' ) }>All</button>
					<button onClick={ () => props.changeFilter ( 'active' ) }>Active</button>
					<button onClick={ () => props.changeFilter ( 'completed' ) }>Completed</button>
				</div>
			</div>
		</div>
	)
}