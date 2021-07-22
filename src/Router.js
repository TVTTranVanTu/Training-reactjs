import React from 'react';
import ConditonalRendering from './components/ConditonalRendering';
import HandleEvent from './components/HandleEvent';
import Lifecycle from './components/Lifecycle';
import Dashboard from './pages/Dashboard';



const routes = [

    {
        path: '/',
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/Lifecycle and Props State',
        exact: true,
        main: () => <Lifecycle />
    },
    {
        path: '/HandleEvent, Key, Mouse, Form submit',
        exact: true,
        main: () => <HandleEvent />
    },
    {
        path: '/Conditonal Rendering',
        exact: true,
        main: () => <ConditonalRendering />
    },

]

export default routes;