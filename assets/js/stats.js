const STORAGE_KEY = 'RweVgiPT4jLcE710iIq3xbe3ZvNLxUri';
const BASE_URL = "https://api.tkuusraicare.org/v1/website/stats/"

function generate_UID(){
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
}

function get_storageID(){
    storage_id = localStorage.getItem(STORAGE_KEY);
    if(!storage_id){
        storage_id = generate_UID();
        localStorage.setItem(STORAGE_KEY, storage_id);
    }
    return storage_id;
}

function stats(page){
    storage_id = get_storageID();
    url = BASE_URL + storage_id + `?page=${page}`
    fetch(url)
}