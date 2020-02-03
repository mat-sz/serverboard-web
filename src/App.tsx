import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar';
import Details from './components/Details';

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="header">
                <h1 className="logo">Serverboard</h1>
            </div>
            <div className="content">
                <Sidebar />
                <Details />
            </div>
        </div>
    );
};

export default App;
