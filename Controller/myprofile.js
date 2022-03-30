const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Nav@gur1",
        database: "Facebook_clone"
    },
});

Createpost = (req, res) => {
    get_token = req.data
    knex('posts').insert({
        Title: req.body.Title,
        description: req.body.description,
        user_id: get_token.user_id,

    }).then(() => {
        res.json({
            Data: "Succesfully Done!"
        })
    }).catch((err) => {
        res.send(err)
    })
}


Deletepost = (req, res) => {
    knex("posts").select("*").where({ post_id: req.params.post_id })
        .del()
        .then(() => {
            res.send("Data delete")
        })
}



Visibility = (req, res) => {
    get_token = req.data
    knex("registration").where({ user_id: get_token.user_id })
        .then(() => {
            user_id = get_token.user_id
            knex("Visibility").insert({
                    privatepublic: req.body.privatepublic,
                    user_id: user_id
                }).then(() => {
                    res.send("Confirm your Visibility")
                })
                .catch((err) => {
                    res.send(err)
                })
        })
}


module.exports = { Createpost, Deletepost, Visibility }