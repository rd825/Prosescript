import React from 'react';

const Home = props => {
    return (
        <div id='container'>

            <h1 className='hero'>Put your thoughts into the world.</h1>
            <h2>Prosescript is a lightweight, Posterous-like interface for Medium.</h2>

            <h2>It frees your writing experience from the shackles of a blogging platform. You can write wherever you work best, whether that's a word processor, email draft, tweetstorm, or mobile notes app. All you have to do is email us your writing and we'll handle publishing it.</h2>

            <h2>If you have a Medium account, you're good to go.</h2>
            
            <div id='signup'>
                <a href={props.signup}>
                    <i className="fab fa-medium"></i>
                    <p>Sign up with Medium</p>
                </a>
            </div>
        </div>
    )
}

export default Home;