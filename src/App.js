import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetChart from './containers/GetChart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <GetChart />
                </header>
            </div>
        );
    }
}

export default App;
