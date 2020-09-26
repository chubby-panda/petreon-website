import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import HomePage from './pages/HomePage'
import PetPage from './pages/PetPage'
import CategoryPage from './pages/CategoryPage'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LoggedOutPage from './pages/LoggedOutPage'


const App = () => {

    const [loggedin, setLoggedin] = useState(window.localStorage.getItem('token') ? true : false)
    const username = ''

    useEffect(() => {
        console.log('You clicked')
    })

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
                    <Route path='/login'>
                        <LoginPage loggedin={loggedin} />
                    </Route>
                    <Route path='/register'>
                        <RegisterPage loggedin={loggedin} />
                    </Route>
                    <Route path='/logout'>
                        <LoggedOutPage loggedin={loggedin} />
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