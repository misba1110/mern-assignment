
import React, {useState}from 'react';
import {LabeledInput,LabeledTextArea} from './input-controls';


const AuthorEditor=(props)=>{

    const [author,setAuthor]=useState(props.author);
   

    const handleSave=(e)=>{
        e.preventDefault();
        
        props.onSave(author);
        
    }

    const handleChange=(id,value)=>{
        author[id]=value;
        setAuthor({...author});
    }

    return (
        <form>
            <LabeledInput value={author._id} id='id' onChange={handleChange} />
            <LabeledInput value={author.name} id="name" onChange={handleChange} />
            <LabeledInput value={author.id} id="id" onChange={handleChange} />
            <LabeledInput value={author.image}  id="image" onChange={handleChange} />
            <LabeledInput value={author._v1} id="v1" onChange={handleChange} />
            <LabeledTextArea value={author.biography} id="biography" onChange={handleChange} />
            <button onClick={handleSave} type="submit" className='btn  btn-primary'>Save</button>
        </form>
    );
};
export default AuthorEditor;