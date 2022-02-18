import {AddItemFormPropsType} from "../../../types/PropsStyle";
import React, {useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";


export function AddItemForm(props: AddItemFormPropsType) {

    const [newTextArea, setTextArea] = useState('');
    const [error, setError] = useState('');

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        setTextArea(e.currentTarget.value);
    };
    const addTask = () => {
        if (newTextArea.trim() === '') {
            setError('Error, can`t add empty task');
            return;
        }
        props.addItem(newTextArea);
        setTextArea('');
    };
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey) addTask();
    };

    return (<div>
        <TextField
            value={newTextArea}
            variant={'outlined'}
            label={'Title'}
            onChange={onChangeText}
            onKeyPress={onKeyPress}
            error={!!error}
            helperText={error}
        />

        <IconButton onClick={addTask} color={'primary'}><ControlPoint/></IconButton>

    </div>);
}
