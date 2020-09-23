import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import HomePage from './pages/HomePage'
import PetPage from './pages/PetPage'
import CategoryPage from './pages/CategoryPage'
import './App.css'


const App = () => {
    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route path='/pet/:id'>
                        <PetPage />
                    </Route>
                    <Route path='/category'>
                        <CategoryPage />
                    </Route>
                    <Route path='/'>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App