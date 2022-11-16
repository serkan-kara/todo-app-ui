import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/authContext";
import ComponentContainer from "../components/containers/componentContainer";
import NewTodo from "../components/containers/newTodo";
import TodoList from "../components/containers/todoList";
import FilterTodos from "../components/containers/filterTodos";


import { useQuery, useMutation } from "@apollo/client";
import { TODOS } from '../api/graphQl/queries'
import { DELETETODO, MARKTODOCOMPLETED, MARKTODOUNCOMPLETED } from '../api/graphQl/mutations'

const Todos = () => {

    const { user, setUser } = useAuth();
    const logoutHandle = () => {
        setUser(false);
    }

    const { queryError, queryLoading, data, refetch } = useQuery(TODOS, {
        context: {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        }
    });

    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState({
        items: [],
        active: 'All'
    });

    const filterTodos = useCallback((key) => {
        switch (key) {
            case 'All':
                setFilteredTodos(prev => ({ active: 'All', items: todos, }));
                break;
            case 'Completed':
                console.log('completed');
                setFilteredTodos({
                    items: todos.filter(todo => todo.completed === true),
                    active: 'Completed'
                });
                break;
            case 'Incompleted':
                setFilteredTodos({
                    items: todos.filter(todo => todo.completed !== true),
                    active: 'Incompleted'
                });
                break;
            default:
                break;
        }
    }, [todos]);

    useEffect(() => {
        if (data) {
            setTodos(data.listTodos);
            filterTodos('All');
        }
    }, [data, filterTodos])

    const todoAddHandler = () => {
        refetch();
    }

    const [deleteTodo, { error }] = useMutation(DELETETODO, {
        context: {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        },
        onCompleted: refetch
    })

    const deleteTodoHandler = (id) => {
        deleteTodo({
            variables: {
                id: id
            }
        })
    }

    const [markTodoCompleted] = useMutation(MARKTODOCOMPLETED, {
        context: {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        },
        onCompleted: refetch
    })

    const [markTodoUncompleted] = useMutation(MARKTODOUNCOMPLETED, {
        context: {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        },
        onCompleted: refetch
    })

    const checkedChangeHandler = (id, isChecked) => {
        if (isChecked) {
            //unchecked
            markTodoUncompleted({
                variables: {
                    id: id
                }
            })
        } else {
            //checked
            markTodoCompleted({
                variables: {
                    id: id
                }
            })
        }
    }

    if (queryLoading) {
        console.log('loading');
    }

    if (queryError) {
        console.log('error', error);
    }



    return (
        <ComponentContainer title={'Todo List'}>
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={filteredTodos.items} onDeleteTodo={deleteTodoHandler} onCheckedChange={checkedChangeHandler} />
            <FilterTodos active={filteredTodos.active} onLinkClicked={(key) => filterTodos(key)} />
            <button onClick={logoutHandle}>Logout</button>
        </ComponentContainer>
    )
}

export default Todos;