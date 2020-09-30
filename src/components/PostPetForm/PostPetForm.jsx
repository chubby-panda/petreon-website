import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const PostPetForm = () => {

    const [credentials, setCredentials] = useState({
        title: '', 
        pet_name: '',
        image: '',
        description: '',
        med_treatment: '',
        goal: '',
        pet_category: '',
        active: true
    }) 
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    const history = useHistory()

    const handleChange = (e) => {
        const {id, value} = e.target
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }))
    }

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pets/`, {
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Token ${localStorage.token}`
            }, 
            body: JSON.stringify(credentials),
        })
        return response.json()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit pressed...")
        if (credentials.title && credentials.pet_name && credentials.image && credentials.description && credentials.med_treatment && credentials.goal && credentials.pet_category && credentials.active) {
            console.log("All data is there...")
            postData().then((response) => {
                console.log(response)
                history.push('/')
            })
        }
    }


    const fetchURL = (url, setterFunction) => {
        fetch(`${process.env.REACT_APP_API_URL}${url}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setterFunction(data);
        })
    }
    
    useEffect(() => {
        fetchURL('/pets/category/', setCategories)
        console.log(categories)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <>
            <h1>I am loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <form>
                    <div className="my-1 form-input-box">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" onChange={handleChange} />
                    </div>
                    <div className="my-1 form-input-box">
                        <label htmlFor="pet_name">Pet Name:</label>
                        <input type="text" id="pet_name" onChange={handleChange} />
                    </div>
                    <div className="my-1 form-input-box">
                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" onChange={handleChange} accept="image/*" />
                    </div>
                    <div className="my-1 form-input-box">
                        <label htmlFor="description">Description:</label>
                        <input type="text" id="description" onChange={handleChange} />
                    </div>
                    <div className="my-1 form-input-box">
                        <label htmlFor="med_treatment">Medical Treatment:</label>
                        <input type="text" id="med_treatment" onChange={handleChange} />
                    </div>
                    <div className="my-1 form-input-box">
                        <label htmlFor="goal">Goal:</label>
                        <input type="number" id="goal" min="1" max="100000" onChange={handleChange} />
                    </div>
                    <div className="my-1 form-input-box">
                        <label htmlFor="pet_category">Pet Category:</label>
                        <select id="pet_category" onChange={handleChange}>
                            {/* {categories.map(function(category, key) {
                                <option value={category}>{category}</option>
                            })} */}
                        </select>
                    </div>
                    <button className="btn btn-primary my-2" type="submit" onClick={handleSubmit}>Post</button>
                </form>
            </>
        )
    }

}


export default PostPetForm