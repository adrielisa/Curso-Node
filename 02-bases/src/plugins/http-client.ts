const axios = require('axios'); 

/*const httpClientPlugin = {
    get: async(url) =>{
        const resp = await fetch(url);
        return await resp.json();
    }
};
*/

export const httpClientPlugin = {
    get: async(url:string) => {
        const response = await axios.get(url);
        return response.data
    }
};


