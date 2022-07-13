const axios = require(`axios`);
const client = require(`../app.js`);

module.exports = async (type = `gif`, endpoint, filter = []) => {
    const baseUrl = `https://kawaii.red/api/`;
    const token = client.kawaiiApiToken;

    const response = await axios.get(`${baseUrl}${type}/${endpoint}/token=${token}&filter=${filter}/`).catch(() => null);

    if (response === null) return null;
    else return response.data.response;
};