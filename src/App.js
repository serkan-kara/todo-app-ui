import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Todos from "./pages/todos";
import PrivateRoute from "./components/containers/privateRoute";

const App = (props) => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todos" element={<PrivateRoute><Todos /></PrivateRoute>} />
            </Routes>
        </>
    )
}

export default App;