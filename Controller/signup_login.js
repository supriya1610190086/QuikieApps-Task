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

Signup = (req, res) => {
    knex.select("*").from("registration").where("Email", req.body.Email)
        .then((data) => {
            if (data.length < 1) {
                knex("registration").insert(req.body)
                    .then(() => {
                        knex.select("registration.user_id", "registration.Name", "registration.Email", "registration.password").from("registration").where("Email ", req.body.Email)
                            .then((registration) => {
                                var token = jwt.sign({ "user_id": registration[0].user_id, "Name": registration[0].Name, "role": "registration", }, "registration", { expiresIn: '24h' })
                                res.send({
                                    "registration": registration,
                                    "accessToken": token,
                                    "expires_in": "24h"

                                })
                            })
                    })
                    .catch((err) => {
                        res.send(err)
                    })
            } else {
                res.send({ "Error": "Duplicate entry" })
            }

        })
}

Login = (req, res) => {
    knex.select("registration.user_id", "registration.Name", "registration.Email", "registration.password").
    from('registration').where({ Email: req.body.Email, password: req.body.password })
        .then(registration => {
            if (registration.length !== 0) {
                var log_token = jwt.sign({ "user_id": registration[0].user_id, "Name": registration[0].Name, "role": "registration" }, "registration", {
                    expiresIn: "2h"
                });
                res.send({
                    registration,
                    access_token: log_token,
                    "expires_in": "24h"

                });
            } else {
                res.status(400).json({
                    message: "failed"
                });
            };
        })
        .catch((err) => {
            res.send(err);
        });
};

module.exports = { Signup, Login }