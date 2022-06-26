import axios from 'axios';

let db = null;
const baseUrl = window.location.origin.includes("localhost") ? "https://nitish.link" : "https://nitishsainani.github.io"

export const getDatabase = async() => {
    if(db) return db;
    let response = await axios.get(`${baseUrl}/static/db.json`);
    db = response.data;
    return db;
}
