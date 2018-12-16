import React from 'react';
import {Link, NavLink} from 'react-router-dom';

let Nav = props => {
    return (
        <nav>
            <Link to='/'><h1 id='logo'>Prosescript</h1></Link>
            <div className='links'>
                <NavLink className='navlink' activeStyle={{border: '1px solid #00ab6c', color: '#00ab6c'}} exact to='/'>Home</NavLink>
                <NavLink className='navlink' activeStyle={{border: '1px solid #00ab6c', color: '#00ab6c'}} to='/about'>About</NavLink>
                <a className='navlink' href={props.signup}>Sign Up</a>
            </div>
        </nav>
    )
}

export default Nav;