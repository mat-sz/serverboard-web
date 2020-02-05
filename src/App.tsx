import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar';
import Details from './components/Details';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <Details />
            </div>
        </div>
    );
};

export default App;
