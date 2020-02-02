import React from 'react';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <div className="header">
                <h1 className="logo">Serverboard</h1>
            </div>
            <div className="content">
                <div className="sidebar">
                    <ul className="servers">
                        <li className="selected status-red">
                            <div className="name">
                                Server #1
                            </div>
                            <div>
                                0.0.0.0
                            </div>
                            <div>
                                last seen: never
                            </div>
                        </li>
                        <li className="status-green">
                            <div className="name">
                                Server #2
                            </div>
                            <div>
                                0.0.0.0
                            </div>
                            <div>
                                online
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details">
                    <h2>Server #1</h2>
                    <section>
                        <h3>Info</h3>
                        <div className="info">
                            <div>
                                <span>Last seen</span>
                                <span>never</span>
                            </div>
                            <div>
                                <span>Services</span>
                                <span>0/10</span>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>Uptime</h3>
                        <div>
                            Graph
                        </div>
                    </section>
                    <section>
                        <h3>Services</h3>
                        <div>
                            Status
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
