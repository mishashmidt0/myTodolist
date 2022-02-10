import React from "react";
import { PropsStyleForTodolist } from "../../../types/PropsStyle";
import s from './styleTodoList.module.css'
import { AddItemForm } from "./AddItemForm";
import { EditebleSpan } from "./EditebleSpan";


export function Todolist ( props: PropsStyleForTodolist ) {

	const removeTodolist = () => {
		props.removeTodolist ( props.id )
	}
	const changeTodolistTitle = ( title: string ) => {
		props.changeTodolistTitle ( props.id, title )
	}

	const addTask = ( title: string ) => {
		props.addTask ( title, props.id )
	}
	return (
		<div className="App">
			<div>
				<h3>
					<EditebleSpan title={ props.heading } onChange={ changeTodolistTitle }/>

					<button onClick={ () => {
						removeTodolist ()
					} }>x
					</button>
				</h3>
				<AddItemForm addItem={ addTask }/>
				<ul>
					{ props.task.map ( ( el ) => {

						const chengeStatusHandler = ( e: React.ChangeEvent<HTMLInputElement> ) => {
							props.changeIsDoneInputTask ( el.id, e.currentTarget.checked, props.id )
						}
						const onChengeTitleHandler = ( newValue: string ) => {
							props.chengeTaskTitle ( el.id, newValue, props.id )
						}

						return ( <li key={ el.id } className={ el.isDone ? s.completeTask : '' }>
								<input type={ el.type }
								       checked={ el.isDone }
								       readOnly={ true }
								       onChange={ chengeStatusHandler }
								/>
								<EditebleSpan title={ el.title } onChange={ onChengeTitleHandler }/>
								<button onClick={ () => props.removeTask ( el.id, props.id ) }>x</button>
							</li>
						)
					} ) }
				</ul>
				<div>
					<button className={ props.filter === 'all' ? s.activeButton : '' } onClick={ () => props.changeFilter ( 'all', props.id ) }>All</button>
					<button className={ props.filter === 'active' ? s.activeButton : '' } onClick={ () => props.changeFilter ( 'active', props.id ) }>Active</button>
					<button className={ props.filter === 'completed' ? s.activeButton : '' } onClick={ () => props.changeFilter ( 'completed', props.id ) }>Completed</button>
				</div>
			</div>
		</div>
	)
}

