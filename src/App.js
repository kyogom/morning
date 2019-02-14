import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GetChart from './containers/GetChart';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Header />
                    <GetChart />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
