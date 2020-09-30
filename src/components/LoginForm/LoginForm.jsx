import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LoginForm.css'

const LoginForm = () => {

    const [credentials, setCredentials] = useState({
        username: '', 
        password: ''
    })

    const [errors, setErrors] = useState(null)

    const history = useHistory()

    const handleChange = (e) => {
        const {id, value} = e.target
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }))
    }

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api-token-auth/`, {
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
                console.log(response)
                if (response.non_field_errors) {
                    setErrors(response.non_field_errors)
                } else {
                    window.localStorage.setItem('token', response.token)
                    window.localStorage.setItem('username', credentials.username)
                    // window.localStorage.setItem('id', response.id)
                    window.location.reload()
                    history.push('/')
                }
            })
        }
    }

    return (
        <>
            <form>
                {errors !== null && 
                    <p className="alert">{errors}</p>
                }
                <div className="my-1 form-input-box">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter username..." onChange={handleChange} />
                </div>
                <div className="my-1 form-input-box">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter password..." onChange={handleChange} />
                </div>
                <button className="btn btn-primary my-2" type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </>
    )
}

export default LoginForm