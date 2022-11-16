import React from "react";
import LinkButton from "../ui/linkButton";

const FilterTodos = ({ onLinkClicked, active }) => {

    return (
        <div className="flex">
            <span className="text-softBlueGray font-bold mr-6">Show: </span>
            <LinkButton text={'All'} active={active === 'All' ? true : false} onClick={() => onLinkClicked('All')} />
            <LinkButton text={'Completed'} active={active === 'Completed' ? true : false} onClick={() => onLinkClicked('Completed')} />
            <LinkButton text={'Incompleted'} active={active === 'Incompleted' ? true : false} onClick={() => onLinkClicked('Incompleted')} />
        </div>
    )
}

export default FilterTodos;