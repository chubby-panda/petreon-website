import React from 'react'

function ErrorMessage({errors}) {
    // console.log(errors)
    return (
        // {errors.map(function(error, index) {
        //     <p key={index} className="alert">{error}</p>
        // })}
    <div className="alert">{errors}</div>
    )
}

export default ErrorMessage