import React from "react";
import { Route } from "react-router-dom";
import Login from "../Component/Login";
import Home from "../Component/Home";


export default () => {
    return (
      <>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </>
    );
  };
  
  