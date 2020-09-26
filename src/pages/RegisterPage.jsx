import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm'


function RegisterPage() {

    return (
        <div className='container'>
            <h1 className="text-primary my-4">Create an Account</h1>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage