import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import UserMenu from "./components/user-menu/UserMenu";

const App = () => (
 <UserMenu />
);
ReactDOM.render(<App />, document.getElementById("app"));
