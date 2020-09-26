import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const RegisterForm = () => {

    const [credentials, setCredentials] = useState({
        username: '', 
        email: '',
        password: '',
        password2: '',
    })

    const history = useHistory()


    const handleChange = (e) => {
        const {id, value} = e.target
        // console.log(e.target)
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }))
    }

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(credentials),
        })
        return response.json()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem('token', response.token)
                history.push('/')
            })
        }
    }

    return (
        <form>
            <div className="my-1 form-input-box">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" onChange={handleChange}/>
            </div>
            <div className="my-1 form-input-box">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" onChange={handleChange}/>
            </div>
            <div className="my-1 form-input-box">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={handleChange}/>
            </div>
            <div className="my-1 form-input-box">
                <label htmlFor="password">Confirm password:</label>
                <input type="password" id="password" onChange={handleChange}/>
            </div>
            <button className="btn btn-primary my-2" type="submit" onClick={handleSubmit}>Register</button>
        </form>
    )
}

export default RegisterForm