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

ReqeustFriend = (req, res) => {
    get_token = req.data
    knex("registration").where({ user_id: get_token.user_id })
        .then(() => {
            let readlineSync = require("readline-sync");
            Name = readlineSync.question("search the Name your's friends :")
            if (Name == get_token.Name) {
                knex("registration").where({ user_id: get_token.user_id })
                    .then(() => {
                        user_id = get_token.user_id
                        knex("Friend_Requests").insert({
                            user_id: user_id
                        }).then((data) => {
                            res.send("Request Succesfully Send")

                        }).catch((err) => {
                            res.send(err)

                        })
                    })
            } else {
                res.send("See All Result")
            }

        }).catch((err) => {
            res.send(err)

        })
}


AcceptRequest = (req, res) => {
    get_token = req.data
    knex("registration").where({ user_id: get_token.user_id })
        .then(() => {
            let readlineSync = require("readline-sync");
            Requests = readlineSync.question("friend request,Should be confirm or not :")
            if (Requests == "confirm") {
                knex("registration").where({ user_id: get_token.user_id })
                    .then(() => {
                        user_id = get_token.user_id
                        knex("Friends").insert({
                                friend_id: req.body.friend_id,
                                user_id: user_id
                            }).then(() => {
                                res.send("Confirm friend Request")
                            })
                            .catch((err) => {
                                res.send(err)

                            })
                    })
            } else {
                res.send("reject Request")
            }
        }).catch((err) => {
            res.send(err)

        })
}

RejectRequest = (req, res) => {
    knex("Friends").select("*").where({ accept_friend_id: req.params.accept_friend_id })
        .del()
        .then((data) => {
            res.send("Reject the Friend Request")
        }).catch((err) => {
            res.send(err)
        })
}

module.exports = { ReqeustFriend, AcceptRequest, RejectRequest }