import React, { useRef, useEffect } from "react";
import Form from "./form";
import Input from "../ui/input";
import { useAuth } from "../../context/authContext";

import { useMutation } from "@apollo/client";
import { NEWTODO } from '../../api/graphQl/mutations';

const NewTodo = ({ onAddTodo }) => {
    const todoRef = useRef(null);
    const { user } = useAuth();

    const [createTodo, { error }] = useMutation(NEWTODO, {
        context: {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        },
        onCompleted: (data) => {
            onAddTodo();
        }
    })

    const todoSubmitHandler = () => {
        const todoText = todoRef.current.value;
        if (todoText.length > 0) {

            createTodo({
                variables: {
                    title: todoText
                }
            })

            if (error) {
                console.log(error);
            }

            todoRef.current.value = '';
        }
    }

    useEffect(() => {
        const keyDownHandler = e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                todoSubmitHandler();
            }
        }

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }
    })

    return (
        <Form onSubmit={todoSubmitHandler}>
            <Input inputRef={todoRef} placeholder='Add a new todo' type='text' />
        </Form>
    )
}

export default NewTodo;