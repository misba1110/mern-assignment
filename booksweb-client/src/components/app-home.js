import React from 'react';
import Refresh from'./app-refresh';

const component = ()=>{

    return <div className='body'>
        <h2>Home!</h2>
        <p>Welcome to the Book's web Home page.</p>
        <p>Here you will find all about books</p>
        <img className='coverimage' src='/images/coverpage.jpg' alt="Book's Home"/>
        <div><Refresh/></div>
    </div>

};

export default component;