import React from "react";
import Checkbox from "../ui/checkbox";
import DeleteImage from '../../assets/delete.svg';

const TodoList = ({ items, onDeleteTodo, onCheckedChange }) => {
    return (
        <div>
            <ul>
                {
                    items.map(todo => (
                        <li key={todo.id} className="flex align-center mb-2 justify-between">
                            <Checkbox id={todo.id} label={todo.todo} checked={todo.completed} onCheckedChange={(id, isChecked) => onCheckedChange(id, isChecked)} />
                            <button onClick={() => onDeleteTodo(todo.id)}>
                                <img src={DeleteImage} alt="" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;