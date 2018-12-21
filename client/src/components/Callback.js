import React, {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Callback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            email: '',
            success: false,
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        if (values.error === 'access_denied') {
            this.setState({error: true});
        } else if (values.state && values.state !== 'opensesame') {
            this.setState({error: true});
        }
    }
    
    changeHandler = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault();
        const values = queryString.parse(this.props.location.search)

        if (this.state.email === '') {
            alert('Please enter the email address you wish to use.')
        } else {
            axios.post('http://localhost:9000/api/auth', {code: values.code, email: this.state.email})
                .then(res => {
                    this.setState({email: '', success: true})
                    console.log('then fired')
                })
                .catch(err => this.setState({error: true}));
        }
        event.target.reset();
        console.log('reset fired')
    }

    render() {
        if (this.state.success === true) {
            return (
                <Redirect to='/'></Redirect>
            )
        } else if (this.state.error) {
            return(
                <div id='error'>
                    <h1 className='hero'>Hmm, something went wrong.</h1>
                    <h4>Here are a couple things you could try:</h4>
                    <ol>
                        <li>Make sure you have a <a className='href' href='https://medium.com/'>Medium account</a>.</li>

                        <li>Log out of and back into your Medium account.</li>

                        <li>Clear your browser history, cookies, etc.</li>

                        <li>If none of those things work, contact <a className='href' href='https://twitter.com/RDesai01'>@RDesai01</a> on Twitter with your issue.</li>
                        
                    </ol>

                </div>
            )
        } else {
            return (
                <div id='register'>
                    <h1 className='hero'>You're almost signed up!</h1>

                    <h4>Please read all of the following for the best Prosescript experience:</h4>

                    <ol>
                        <li>Now that you've signed up, you're ready to go. In fact, you'll never need to visit our website again.</li>
                        
                        <li>When you have writing that you want to publish, simply email it to <mark>prosescriptapp  @gmail .com</mark> (without the spaces).</li>
                        
                        <li>The subject line of your email will be your post's title and the text of your email will be your post.</li>
                        
                        <li>Just one more thing... <mark>You need to register an email below or we won't know it's you!</mark></li>

                        <li>That's it. Just make sure you're sending your posts to us from the email you register with.</li>
                    </ol>

                    <h1 className='hero'>We just need your email.</h1>
                    
                    <h4>You should enter the email address you will be sending your writing from. This is how we process your emails and post appropriately to your Medium account. Without your email, we won't be able to link up your posts to your account, meaning you won't get published!</h4>

                    <h4><mark>Once you're successfully signed up, we'll redirect you back to the homepage.</mark></h4>

                    <form onSubmit={this.submitHandler}>
                        <input type='email' name='email' placeholder='Please enter your email here.' value={this.props.value} onChange={this.changeHandler}/>
                        <input type='submit' value='Complete Signup'/>
                    </form>

                </div>
            )
        }
    }
}

export default Callback;