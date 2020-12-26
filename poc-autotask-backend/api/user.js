const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {

            console.log(req.body.password)
            console.log(hash)
            console.log(req.body.name)
            console.log(req.body.email)

            const password = hash

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email,
                    password
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}