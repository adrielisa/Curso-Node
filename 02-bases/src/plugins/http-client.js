const axios = require('axios'); 

/*const httpClientPlugin = {
    get: async(url) =>{
        const resp = await fetch(url);
        return await resp.json();
    }
};
*/

const httpClientPlugin = {
    get: async(url) => {
        const response = await axios.get(url);
        return response.data
    }
};

module.exports = {
    http: httpClientPlugin,
}
