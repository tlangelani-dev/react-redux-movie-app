import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import PageNoteFound from '../../pages/PageNoteFound/PageNoteFound';

const App = () => {
    return (
        <section className='app'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/movies/:id' component={MovieDetails} />
                    <Route component={PageNoteFound} />
                </Switch>
                <Footer />
            </Router>
        </section>
    )
}

export default App
