import { contains, copyObject, delay } from '../utils/core';
const url = 'http://localhost:5000/api/authors/';



export class AuthorService {
    static instance = new AuthorService();
    constructor() { }
    getAll = async () => {
        try {
            let response = await fetch(url);
            console.log('response', response);
            if (response.status !== 200) {
                console.log("error", response.status);
                return [];
            }
            let authors = await response.json();
            return authors;
        }
        catch (error) {
            console.log('error', error.message);
            return null;
        }


    }
    addAuthor = (author) => {
        this.authors.push(author);
        this.save();
    }
}