import React, {useState} from "react";
import {Grid, IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {AddItemFormPropsType} from "../../types/PropsStyle";


export const AddItemForm = React.memo(({id, action}: AddItemFormPropsType) => {
    console.log("AddItemForm")
    const dispatch = useDispatch()

    const [title, setTextArea] = useState('');
    const [error, setError] = useState('');

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        setTextArea(e.currentTarget.value);
    };

    const addTask = () => {
        if (title.trim() === '') {
            setError('Error, can`t add empty task');
            return;
        }

        dispatch(action(id, title))
        setTextArea('');
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTask();
    };

    return (<div>

        <Grid container style={{padding: '20px'}}>

            <TextField
                value={title}
                variant={'outlined'}
                label={'Title'}
                onChange={onChangeText}
                onKeyPress={onKeyPress}
                error={!!error}
                helperText={error}
            />

            <IconButton onClick={addTask} color={'primary'}><ControlPoint/></IconButton>
        </Grid>
    </div>);
})
