import React from 'react';

const About = props => {
    return (
        <div id='about'>
            <h1 className='hero'>Writing is thinking.</h1>

            <h4><span className='italic'>To write well is to think clearly.</span></h4>

            <h4>Unfortunately, many forces stand in our way when we seek to write.</h4>
                
            <h4>Perhaps the most pernicious of these foes is the very act of sitting down to write. Our minds conjure endless tasks to lure us away: work emails await our reply, the kids are rowdy, the dog needs to go out.</h4>

            <h4>But if we could just carve out the time to write, we'd find we have the space to let our best thoughts unfold.</h4>

            <h4>Prosescript will help you clear those early barriers to writing by freeing you from your text editor. This means you can write anywhere: a word processor, a mobile note-taking app, even an email draft. No matter where you write, Prosescript will accept your writing in an email and convert it into a Medium post.</h4>

            <h4>Prosescript will help you think better by making writing easier. All you need to get started is a Medium account and an email address.</h4>

            <h1 className='hero'>What's in a name?</h1>

            <h4>What sort of a name is Prosescript, anyway?</h4>

            <h4>Because we're writers, we couldn't resist the urge to gave our name a double meaning.</h4>

            <h4>In Latin, <span className='italic'>pro se</span> means "for oneself" and <span className='italic'>scriptus</span> means "written." So Prosescript is writing for oneself. Since we believe writing is thinking, we want Prosescript to be a home for those people who want to get their thoughts out into the world.</h4>

            <h4>In English, <span className='italic'>prose</span> refers to "written language without metrical form" and <span className='italic'>script</span> is a "list of commands executed by a computer." In this sense, Prosescript is a computer program that renders your writing.</h4>

            <h4>For us, these two meanings encapsulate the core purpose of Prosescript. Our goal is to provide you with a tech tool that enables you to write for yourself by rendering your thinking into the world.</h4>

            <h1 className='hero'>How does it work?</h1>

            <h4>Read all of the following for the best Prosescript experience:</h4>

            <ol>
                <li>Make sure you have a Medium account and an email address.</li>

                <li>Create your Prosescript account using the "Sign Up" button above or by clicking <a id='href' href={props.signup}>this link</a>.</li>

                <li>When you've signed up, you're ready to go. In fact, you'll never need to visit our website again.</li>
                
                <li>When you have writing that you want to publish, simply email it to <span className='italic'>prosescriptapp  @ gmail . com</span> (without the spaces).</li>
                
                <li>The subject line of your email will be your post's title and the text of your email will be your post.</li>
                
                <li>Make sure you're sending your post from the email you registered with during signup or we won't know it's you!</li>

                <li>That's it! Go forth and write.</li>
            </ol>
            
        </div>
    )
}

export default About;