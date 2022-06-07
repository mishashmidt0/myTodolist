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
const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "918ec3c9-ea92-470f-ae86-9d6bbf63b653"

    }
}


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
        instance.post("todo-lists", {title: "React tasks"}, settings).then(res => {
                // debugger
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
                    instance.delete(`todo-lists/${item.id}`, settings).then(res => {
                            console.log(res)
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
        instance.delete("todo-lists/id", settings)
            .then(res => setTodo(res))
            .catch(err => {
                
                setTodo(err.response.data.message)
                console.warn("ERROR:" + err.response.data.message)
            })

    }, [])

    return <div> {JSON.stringify(todo)} </div>
}