import React, {ChangeEvent, useState} from "react";
import {EditebleSpanPropsType} from "../../../types/PropsStyle";
import {TextField} from "@material-ui/core";
import {changeTodolistTitleAC} from "../../../store/todolist-reducer";
import {useDispatch} from "react-redux";

export function EditebleSpan({id, title}: EditebleSpanPropsType) {
    const dispatch = useDispatch()

    let [editMode, setEditMode] = useState<boolean>(false);
    let [titleH, setTitle] = useState(title);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const activateViewMode = () => {
        setEditMode(false)

    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTodolistTitleAC(id, e.currentTarget.value))
        setTitle(e.currentTarget.value);
    }


    return (
        editMode ? <TextField
                value={title}
                onBlur={activateViewMode}
                autoFocus
                onChange={onChangeTitleHandler}/>

            : <span onDoubleClick={activateEditMode}>{titleH}</span>
    )
}
