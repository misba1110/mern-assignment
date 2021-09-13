import React, {useState}from 'react';
import AuthorEditor from './author-editor'
import {AuthorService} from '../services/author-service';
import {withRouter} from 'react-router-dom';


const Component=(props)=>{

    //console.log(props);

    const author={
        _id:'',
        name:'',
        id:'',
        photo:'',
        biographhy:'',
        _v1:'' };

        const handleSave=(author)=>{
            AuthorService.instance.addAuthor(author);
            props.history.push('/author/list'); 
        };
    
        return (
            <div>
                <h2>Add New Author</h2>
                <AuthorEditor author={author} onSave={handleSave}/>
        </div>
    );
};
export default Component;
