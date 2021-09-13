import "./author-list.css";
import React, { useState, useEffect, useRef } from 'react';
import { link } from 'react-router-dom';
import Loading from './loading';
import { AuthorService } from '../services/author-service';



















const Component = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        AuthorService.instance.getAll().then(setAuthors);


    });
    return (
        <div>
            <h2>Author List</h2>
            <button>edit</button>
            <div className="body">
            <div className="container">

                <div className="gallery">
                    <img src='/images/vivek-dutta-mishra.jpg' />
                    <div className="desc">vivek-dutta-mishra</div>
                </div>
                <div className="gallery">
                    <img src='/images/ramdhari-sing-dinkar.jpg' />
                    <div className="desc">ramdhari-sing-dinkar</div>
                </div>
                <div className="gallery">
                    <img src='/images/jkrowling.jpg' />
                    <div className="desc">jk-rowling</div>
                </div>
                <div className="gallery">
                    <img src='/images/jeffrey-archer.jpg' />
                    <div className="desc">jeffrey-archer</div>
                </div>
                <div className="gallery">
                    <img src='/images/john-grisham.jpg' />
                    <div className="desc">jhon-grisham</div>
                </div>
                
</div>




            </div>
        </div>
    )
}
export default Component;


