import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SinglePage from './components/watch/SinglePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ListMovie from './pages/movie/ListMovie';
import Pricings from './pages/pricing/Pricing';
import CheckOut from './pages/checkout/CheckOut';
import UserInfo from './pages/user/UserInfo';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/listmovie" component={ListMovie} />
                    <Route exact path="/pricing" component={Pricings} />
                    <Route path="/checkout/:id" component={CheckOut} exact />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/userinfo" component={UserInfo} />
                    <Route path="/singlepage/:id" component={SinglePage} exact />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
