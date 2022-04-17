import React, {useState} from "react";
import {Grid, IconButton, TextField} from "@material-ui/core";
import {ControlPoint} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AddItemFormPropsType} from "../../types/PropsStyle";
import {storeType} from "../../store/redux";
import {changeTitle, itemReducerType} from "../../store/change-reducer";


export const AddItemForm = React.memo(({action}: AddItemFormPropsType) => {

    const dispatch = useDispatch()
    const item = useSelector<storeType, itemReducerType>((store) => store.itemReducer)

    const [error, setError] = useState('');

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        dispatch(changeTitle(e.currentTarget.value));
    };

    const addTask = () => {
        if (item.title.trim() === '') {
            setError('Error, can`t add empty task');
            return;
        }
        action()
        dispatch(changeTitle(''));
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTask();
    };


    return (<div>

        <Grid container style={{padding: '20px'}}>

            <TextField
                value={item.title}
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
