import React, {useEffect, useState} from "react";
import axios from "axios";

export default {
    title: "Api test"
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "918ec3c9-ea92-470f-ae86-9d6bbf63b653"
    }
})


export const getTodolist = () => {
    const [todo, setTodo] = useState<any>(null)


    useEffect(() => {
        instance.get("todo-lists").then(res => {
                setTodo(res.data)
            }
        )

    }, [])

    return <div> {JSON.stringify(todo)} </div>
}

export const postTodolist = () => {
    const [todo, setTodo] = useState<any>(null)

    useEffect(() => {
        const title = "React tasks"
        instance.post("todo-lists", {title: title}).then(res => {

                setTodo(res.data.data.item)
            }
        )

    }, [])

    return <div> {JSON.stringify(todo)} </div>
}

export const deleteTodolistAll = () => {
    const [todo, setTodo] = useState<any>(null)


    useEffect(() => {
        instance.get("todo-lists").then(res => {

                res.data.forEach((item: any) => {
                    instance.delete(`todo-lists/${item.id}`).then(res => {

                            setTodo(res.data)
                        }
                    )
                })

            }
        )

    }, [])


    return <div> {JSON.stringify(todo)} </div>
}

export const deleteTodolist = () => {
    const [todo, setTodo] = useState<any>(null)

    useEffect(() => {
        const todolistId = "123"
        instance.delete(`todo-lists/id${todolistId}`)
            .then(res => setTodo(res))
            .catch(err => {
                setTodo(err.response.data.message)
            })

    }, [])

    return <div> {JSON.stringify(todo)} </div>
}