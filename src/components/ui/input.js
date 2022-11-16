import React from "react";

const Input = ({ placeholder, type, inputRef }) => {
    return (
        <input
            className="border-b-2 outline-none py-2 my-2 text-darkBlueGray font-medium focus:border-darkBlueGray"
            ref={inputRef}
            type={type}
            placeholder={placeholder} />
    )
}

export default Input;