import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

function LoginPage() {
    return (
        <>
            <div className="container">
                <h1 className="text-primary my-4">Log in</h1>
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage