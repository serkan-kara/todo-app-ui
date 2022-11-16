import React from "react";

const LinkButton = ({ text, onClick, active }) => {

    return (
        <button
            onClick={onClick}
            className={`${active ? 'text-darkBlueGray' : 'text-oceanBlue underline decoration-solic'} mr-3`}
        >{text}</button>
    )
}

export default LinkButton;