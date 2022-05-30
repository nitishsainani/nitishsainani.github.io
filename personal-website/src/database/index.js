import axios from 'axios';

let db = null;

export const getDatabase = async() => {
    if(db) return db;
    let response = await axios.get('https://nitishsainani.github.io/static/db.json');
    db = response.data;
    return db;
}
