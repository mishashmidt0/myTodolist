import React from "react";
import { PropsStyleForTodolist } from "../../../types/PropsStyle";
import s from './styleTodoList.module.css';
import { AddItemForm } from "./AddItemForm";
import { EditebleSpan } from "./EditebleSpan";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { DeleteOutline, HighlightOff } from "@material-ui/icons";
import { Checkbox } from "@material-ui/core";


export function Todolist ( props: PropsStyleForTodolist ){

	const removeTodolist = () => {
		props.removeTodolist ( props.id );
	};
	const changeTodolistTitle = ( title: string ) => {
		props.changeTodolistTitle ( props.id, title );
	};

	const addTask = ( title: string ) => {
		props.addTask ( title, props.id );
	};
	return ( <div className="App">
		<div>
			<h3>
				<EditebleSpan title={ props.heading } onChange={ changeTodolistTitle }/>

				<Button onClick={ () => {
					removeTodolist ();
				} }><DeleteOutline/>
				</Button>
			</h3>
			<AddItemForm addItem={ addTask }/>
			<ul>
				{ props.task.map ( ( el ) => {

					const chengeStatusHandler = ( e: React.ChangeEvent<HTMLInputElement> ) => {
						props.changeIsDoneInputTask ( el.id, e.currentTarget.checked, props.id );
					};
					const onChengeTitleHandler = ( newValue: string ) => {
						props.chengeTaskTitle ( el.id, newValue, props.id );
					};

					return ( <li key={ el.id }>
						<Checkbox
							checked={ el.isDone }
							readOnly={ true }
							onChange={ chengeStatusHandler }
							className={ el.isDone ? s.completeTask : '' }
						/>
						<EditebleSpan title={ el.title } onChange={ onChengeTitleHandler }/>
						<Button onClick={ () => props.removeTask ( el.id, props.id ) }><HighlightOff color={ "primary" }/></Button>
					</li> );
				} ) }
			</ul>
			<div>
				<ButtonGroup color="primary" aria-label="outlined primary button group">
					<Button variant={ props.filter === 'all' ? 'contained' : 'text' } onClick={ () => props.changeFilter ( 'all', props.id ) }>All</Button>
					<Button variant={ props.filter === 'active' ? 'contained' : 'text' } onClick={ () => props.changeFilter ( 'active', props.id ) }>Active</Button>
					<Button variant={ props.filter === 'completed' ? 'contained' : 'text' } onClick={ () => props.changeFilter ( 'completed', props.id ) }>Completed</Button>
				</ButtonGroup>
			</div>
		</div>
	</div> );
}

