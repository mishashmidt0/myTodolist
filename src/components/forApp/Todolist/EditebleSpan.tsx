import React, { ChangeEvent, useState } from "react";
import { EditebleSpanPropsType } from "../../../types/PropsStyle";


export function EditebleSpan ( props: EditebleSpanPropsType ) {


	let [ editMode, setEditMode ] = useState<boolean> ( false );
	let [ title, setTitle ] = useState ( props.title );

	const activateEditMode = () => {
		setEditMode ( true )
	}
	const activateViewMode = () => {
		setEditMode ( false )
		props.onChange ( title )
	}
	const onChangeTitleHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
		setTitle ( e.currentTarget.value )
	}


	return (
		editMode ? <input
				value={ title }
				onBlur={ activateViewMode }
				autoFocus
				onChange={ onChangeTitleHandler }/>
			: <span onDoubleClick={ activateEditMode }>{ props.title }</span>
	)
}
