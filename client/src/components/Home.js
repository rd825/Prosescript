import React from 'react';

const clientId = '575987a2325a';
const state = 'opensesame';
const redirectUri = 'https://prosescript.netlify.com/callback'
const url = `https://medium.com/m/oauth/authorize?client_id=${clientId}&scope=basicProfile,publishPost&state=${state}&response_type=code&redirect_uri=${redirectUri}`

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <a href={url}>Log in with Medium</a>
        </div>
    )
}

export default Home;