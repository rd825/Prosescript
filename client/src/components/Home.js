import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
    return (
        <div id='home'>

            <h1 className='hero'>Put your thoughts into the world.</h1>
            <h4>Prosescript is a lightweight, Posterous-like interface for Medium.</h4>

            <h4>It frees your writing experience from the shackles of a blogging platform. You can write wherever you work best, whether that's a word processor, email draft, tweetstorm, or mobile notes app. All you have to do is email us your writing and we'll handle publishing it.</h4>

            <h4>If you have a Medium account, you're good to go.</h4>
            
            <div id='signup'>
                <a id='signup-button' href={props.signup}>
                    <i className="fab fa-medium"></i>
                    <p>Sign up with Medium</p>
                </a>
            </div>
            <Link to='/about' id='learn-more'>Learn more about Prosescript</Link>
        </div>
    )
}

export default Home;