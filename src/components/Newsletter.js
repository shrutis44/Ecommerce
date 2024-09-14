import React from 'react'

const Newsletter = () => {
    return (
        <div class="letter container" style={{"margin-bottom":"25px"}}>
            <div class="letterText">
                <h1>Sign Up for NewsLetter</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="inp">
                <input type="text" placeholder="Enter Email"/>
                    <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Newsletter