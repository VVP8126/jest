const axios = require("axios");

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const ids = response.data.map(user => user.id);
        return ids;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getData;
