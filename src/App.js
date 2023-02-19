import React from "react";
import DrawerAppBar from "./components/Nav";
import "./App.css";
import SideNav from "./components/SideNav";
import Nav from "./components/Nav";
import Body from "./components/Body";
import WorkingCommunity from "./Pages/WorkingCommunity";
import Layout from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>

      <DrawerAppBar />
      <Layout />

    </React.Fragment>
  );
}

export default App;
