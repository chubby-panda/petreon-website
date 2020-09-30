import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import HomePage from './pages/HomePage'
import PetPage from './pages/PetPage'
import CategoryPage from './pages/CategoryPage'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LoggedOutPage from './pages/LoggedOutPage'
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PetCreatePage from './pages/PetCreatePage'
import ProfilePage from './pages/ProfilePage'



const App = () => {

    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route path='/pet/:id'>
                        <PetPage />
                    </Route>
                    <Route path='/profile/:id'>
                        <ProfilePage />
                    </Route>
                    <Route path='/pet-create'>
                        <PetCreatePage />
                    </Route>
                    <Route path='/category'>
                        <CategoryPage />
                    </Route>
                    <PublicRoute restricted={true} component={LoginPage} path='/login'>
                        {/* <LoginPage /> */}
                    </PublicRoute>
                    <PublicRoute restricted={true} component={RegisterPage} path='/register'>
                        {/* <RegisterPage /> */}
                    </PublicRoute>
                    <Route path='/logout'>
                        <LoggedOutPage />
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