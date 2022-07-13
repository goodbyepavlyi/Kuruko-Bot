const axios = require(`axios`);

const request = async (url) => {
    const response = await axios.get(url);

    if (response.status !== 200) throw new Error(`Failed to fetch ${url}`);
    return response;
};

module.exports = {
    cat: () => request(`https://aws.random.cat/meow`).then(response => response.data.file),
    dog: () => request(`https://dog.ceo/api/breeds/image/random`).then(response => response.data.message),
    bunny: () => request(`https://api.bunnies.io/v2/loop/random/?media=gif,png`).then(response => response.data.media.poster),
    duck: () => request(`https://random-d.uk/api/v1/random?type=png`).then(response => response.data.url),
    fox: () => request(`https://randomfox.ca/floof/`).then(response => response.data.image),
    lizard: () => request(`https://nekos.life/api/v2/img/lizard`).then(response => response.data.url),
    koala: () => request(`https://some-random-api.ml/img/koala`).then(response => response.data.link),
    panda: () => request(`https://some-random-api.ml/img/panda`).then(response => response.data.link),
    raccoon: () => request(`https://some-random-api.ml/img/racoon`).then(response => response.data.link),
    kangaroo: () => request(`https://some-random-api.ml/img/kangaroo`).then(response => response.data.link),
}