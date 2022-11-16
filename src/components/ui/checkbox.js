import React, { useState } from "react";

const Checkbox = ({ label, checked, onCheckedChange, id, ...props }) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const onChecked = () => {
        onCheckedChange(id, isChecked);
        setIsChecked((prev) => !prev);
    }

    return (
        <div className="flex items-center">
            <label className="flex items-center ml-2 font-medium text-darkBlueGray dark:text-darkBlueGray">
                <input
                    className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    checked={isChecked}
                    // onChange={() => setIsChecked((prev) => !prev)}
                    onChange={onChecked}
                    {...props} />
                {label}
            </label>
        </div>
    )
}

export default Checkbox;