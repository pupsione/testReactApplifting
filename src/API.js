import axios from 'axios';

const getToken = () => {
    const tokenData = localStorage.getItem('access_token');

    if (tokenData) {
        return JSON.parse(tokenData);
    } else {
        return false;
    }
};

const getAllArticles = async () => {
    return await axios.get('https://fullstack.exercise.applifting.cz/articles', {
        headers: {
            'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
            'Authorization': `${getToken()}`
        },
    })
}

const getArticle = async (idArticle) => {
    return await axios.get(`https://fullstack.exercise.applifting.cz/articles/${idArticle}`, {
        headers: {
            'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
            'Authorization': `${getToken()}`
        },
    })
}

const deleteArticle = async (idArticle) => {
    return await axios.delete(`https://fullstack.exercise.applifting.cz/articles/${idArticle}`, {
        headers: {
            'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
            'Authorization': `${getToken()}`
        },
    })
}

const postArticle = (title, content) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${getToken()}`,
        'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
    };

    const article = {
        title: `${title}`,
        content: `${content}`,
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

// const postImage = () =>{
//     const headers = {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `${getToken()}`,
//         'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
//     };

//     const article = {
//         image: 'https://commons.wikimedia.org/wiki/Commons:Quality_images'
//     };

//     return axios.post('https://fullstack.exercise.applifting.cz/articles', article, { headers })
// }

const postComment = (content, articleId) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${getToken()}`,
        'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
    };

    const comentsInfo = {
        author: "Iryna",
        content: `${content}`,
        articleId: `${articleId}`
    };

    return axios.post('https://fullstack.exercise.applifting.cz/comments', comentsInfo, { headers })
}


// nevim proc tohle nefungue. V postmanu mam vsechno v poradku. 


// const commentVoteUp = (commentId) => {
//     return axios.post('https://fullstack.exercise.applifting.cz/comments/6eb14a69-004d-43fc-a28a-08118d3d5c9d/vote/up', {
//         headers: {
//             'Content-Type': 'application/json',
//             'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
//         }
//     })
// }

// const commentVoteDown = (commentId) => {
//     return axios.post(`https://fullstack.exercise.applifting.cz/comments/${commentId}/vote/down`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'X-API-KEY': 'df2e2e3f-afa5-473e-99f4-d20c2a6a1a1e',
//         }
//     })
// }




export { getAllArticles, getArticle, deleteArticle, getLogin, postArticle, getToken, postComment }