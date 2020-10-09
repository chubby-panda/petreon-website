import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";
import PledgePage from "./pages/PledgePage";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoggedOutPage from "./pages/LoggedOutPage";
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PetCreatePage from "./pages/PetCreatePage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Footer from "./components/Footer/Footer";
import MyPetsPage from "./pages/MyPetsPage";
import AboutPage from "./pages/AboutPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import PostImagePage from "./pages/PostImagePage";

const App = () => {
    return (
        <Router>
            <div>
                <Nav />

                <Switch>
                    <Route path="/pet/:petId/pledge/:pledgeId">
                        <PledgePage />
                    </Route>
                    <PrivateRoute
                        component={PostImagePage}
                        path="pet/:petId/images"
                        exact
                    />
                    <Route path="/pet/:petId">
                        <PetPage />
                    </Route>
                    <Route path="/profile/:username/pets">
                        <MyPetsPage />
                    </Route>
                    <Route path="/profile/:username">
                        <ProfilePage />
                    </Route>
                    <PrivateRoute
                        component={NotificationsPage}
                        path="/notifications"
                        exact
                    />
                    <PrivateRoute
                        component={Dashboard}
                        path="/dashboard"
                        exact
                    />
                    <PrivateRoute
                        component={AccountSettingsPage}
                        path="/account-settings"
                        exact
                    />
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/pet-create">
                        <PetCreatePage />
                    </Route>
                    <Route path="/category">
                        <CategoryPage />
                    </Route>
                    <Route path="/privacy-policy">
                        <PrivacyPolicyPage />
                    </Route>
                    <PublicRoute
                        restricted={true}
                        component={LoginPage}
                        path="/login"
                    >
                        {/* <LoginPage /> */}
                    </PublicRoute>
                    <PublicRoute
                        restricted={true}
                        component={RegisterPage}
                        path="/register"
                    >
                        {/* <RegisterPage /> */}
                    </PublicRoute>
                    <Route path="/logout">
                        <LoggedOutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
