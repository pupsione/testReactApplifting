import axios from 'axios';

const getAllArticles = async (token) => {
    return await axios.get('https://fullstack.exercise.applifting.cz/articles', {
        headers: {
            'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
            'Authorization': `${token}`
        },
    })
}

const postArticle = (title, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
        'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
    };

    const article = {
        title: `${title}`,
    };

    return axios.post('https://fullstack.exercise.applifting.cz/articles', article, { headers })
}

const getLogin = (name, password) => {
    const headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e'
    };

    const article = {
        username: `${name}`,
        password: `${password}`,
    };

    return axios.post('https://fullstack.exercise.applifting.cz/login', article, { headers })
};


const getToken = () => {
    const tokenData = localStorage.getItem('access_token');

    if (tokenData) {
        return JSON.parse(tokenData);
    } else {
        return false;
    }
};


export { getAllArticles, getLogin, postArticle, getToken }