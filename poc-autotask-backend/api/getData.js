module.exports = app => {
    const users = async (req, res) => {
        const users = await app.db('users')
        res.json(users)
    }

    return { users }
}