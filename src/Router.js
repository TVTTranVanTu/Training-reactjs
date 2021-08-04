import React from "react";
import ConditonalRendering from "./components/ConditonalRendering";
import HandleEvent from "./components/HandleEvent";
import Lifecycle from "./components/Lifecycle";
import ReactHook from "./components/ReactHook";
import Home from "./pages/Home";
import Task from "./pages/Task";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/task",
    exact: true,
    main: () => <Task />,
  },
  {
    path: "/Lifecycle-and-Props-State",
    exact: true,
    main: () => <Lifecycle />,
  },
  {
    path: "/HandleEvent-Key-Mouse-Form-submit",
    exact: true,
    main: () => <HandleEvent />,
  },
  {
    path: "/Conditonal-Rendering",
    exact: true,
    main: () => <ConditonalRendering />,
  },
  {
    path: "/React-Hooks",
    exact: true,
    main: () => <ReactHook />,
  },
];

export default routes;
