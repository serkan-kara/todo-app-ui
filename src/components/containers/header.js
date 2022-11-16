import React from "react";
import logo from '../../assets/logo.svg'
import { useAuth } from "../../context/authContext";

const Header = ({ title, subTitle }) => {
    const { user, setUser } = useAuth();

    const onLogoutClick = () => {
        setUser(false);
    }

    return (
        <div className="space-y-2 pb-10">
            <div className="flex justify-between">
                <img src={logo} alt="Todo Logo" />
                {
                    user ?
                        <button onClick={onLogoutClick}>Logout</button> : null
                }
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <h5 className="text-softBlueGray">{subTitle}</h5>
        </div>
    )
}

export default Header;