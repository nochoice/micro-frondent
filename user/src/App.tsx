import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import UserMenu from "./components/user-menu/UserMenu";
import UserList from "./components/user-list/UserList";

const App = () => (
    <>
        <UserMenu />
        <UserList />
    </>


);
ReactDOM.render(<App />, document.getElementById("app"));
