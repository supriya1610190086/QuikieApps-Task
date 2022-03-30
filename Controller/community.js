const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Nav@gur1",
        database: "Facebook_clone"
    },
});

GetByIdPost = (req, res) => {
    knex.select("*").from("posts").where({ post_id: req.params.post_id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
};


user_create_All_post = (req, res) => {
    knex.from('posts').select("*").where({ user_id: req.params.user_id })
        .then((rows) => {
            res.send(rows)
        })
}

module.exports = { GetByIdPost, user_create_All_post }