import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import GetChart from './containers/GetChart';
import DisplayTable from './containers/DisplayTable';
import Footer from './components/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <Header />
                        <main style={{ 'marginTop': 100, 'marginLeft': 75 }}>
                            <Route exact path="/" component={GetChart} />
                            <Route path="/table" component={DisplayTable} />
                        </main>
                        <Footer />
                    </MuiThemeProvider>
                </Router>
            </div>
        );
    }
}

export default App;
