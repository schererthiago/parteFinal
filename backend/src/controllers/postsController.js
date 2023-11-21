const connection = require('../config/db');

async function listPosts(request, response) {
    const query = 'SELECT * FROM posts  ';

    connection.query(query, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function listPostsByUser(request, response) {
    const query = 'SELECT * FROM posts WHERE `user_id` = ?  ';
    const params = request.params.id

    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function findPosts(request, response) {
    const query = 'SELECT * FROM posts WHERE `id` = ? ';
    const params = request.params.id

    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storePost(request, response) {    
    const params = Array(
        request.body.post,
        request.body.userId,        
    );
    
    const query = 'INSERT INTO posts(descricao,user_id) values(?,?);';

    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Post cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }        
    })
}


module.exports = {
    listPosts,
    listPostsByUser,
    storePost,
    findPosts
}