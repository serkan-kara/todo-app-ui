import React from "react";

const InfoText = ({ text, type }) => {
    return (
        <div className={`${type === 'error' ? 'text-errorRed' : 'text-oceanBlue'}`}>
            {text}
        </div>
    )
}

export default InfoText;