import React from "react";

const Form = ({ children, onSubmit }) => {
    return (
        <form action="submit" onSubmit={onSubmit} className='flex flex-col'>
            {
                children
            }
        </form>
    )
}

export default Form;