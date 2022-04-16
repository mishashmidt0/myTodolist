import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {EditebleSpanPropsType} from "../../../types/PropsStyle";
import {TextField} from "@material-ui/core";


export function EditebleSpan({id, title, action}: EditebleSpanPropsType) {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [titleH, setTitle] = useState(title);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const activateViewMode = () => {
        action(id, title)
        setEditMode(false)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onkeypress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            action(id, title)
            setEditMode(false)
        }
    }

    return (
        editMode ? <TextField
                value={titleH}
                onBlur={activateViewMode}
                autoFocus
                onChange={onChangeTitleHandler}
                onKeyPress={onkeypress}
            />

            : <span onDoubleClick={activateEditMode}>{titleH}</span>
    )
}
