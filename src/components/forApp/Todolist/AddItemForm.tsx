import { AddItemFormPropsType } from "../../../types/PropsStyle";
import React, { useState } from "react";
import s from "./styleTodoList.module.css";


export function AddItemForm ( props: AddItemFormPropsType ) {

	const [ newTextArea, setTextArea ] = useState ( '' )
	const [ error, setError ] = useState ( '' );

	const onChangeText = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		setError ( '' )
		setTextArea ( e.currentTarget.value )
	}
	const addTask = () => {
		if ( newTextArea.trim () === '' ) {
			setError ( 'Error' );
			return
		}
		props.addItem ( newTextArea );
		setTextArea ( '' )
	}
	const onKeyPress = ( e: React.KeyboardEvent<HTMLInputElement> ) => {
		if ( e.ctrlKey ) addTask ()
	}

	return (
		<div>
			<input className={ error && s.textInput } onChange={ onChangeText } value={ newTextArea } onKeyPress={ onKeyPress }/>
			<button onClick={ addTask }>+</button>
			{ error && <div className={ s.textError }>{ 'Error, can`t add empty task' }</div> }
		</div>
	)
}
