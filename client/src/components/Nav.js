import React from 'react';
import {Link, NavLink} from 'react-router-dom';

let Nav = props => {
    return (
        // The logo links home. The first navlink links home as well. The second navlink goes to the form.
        // It'd be great to figure out how to switch Add to Edit in the relevant cases.
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