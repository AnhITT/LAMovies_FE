import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SinglePage from './components/watch/SinglePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/singlepage/:id" component={SinglePage} exact />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
