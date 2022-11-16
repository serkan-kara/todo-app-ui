import React from "react";

const Button = ({ text, type, onClick }) => {
    return (
        <button
            className="bg-oceanBlue rounded-md text-white p-2"
            type={type}
            onClick={onClick}>{text}</button>
    )
}

export default Button;