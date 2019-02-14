import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GetChart from './containers/GetChart';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <header className="App-header"> */}
                <Header />
                <GetChart />
                {/* </header> */}
            </div>
        );
    }
}

export default App;
