import React from "react";
import Header from './header';

const ComponentContainer = ({ title, subTitle, children }) => {
    return (
        <div className="flex flex-col justify-center min-h-screen bg-slate-100 md:items-center">
            <div className="flex flex-col p-8 m-3 space-y-10 bg-white rounded-xl shadow-xl md:min-w-[50%] md:space-y-0 md:p-16">
                <Header title={title} subTitle={subTitle} />
                {
                    children
                }
            </div>
        </div>
    )
}

export default ComponentContainer;