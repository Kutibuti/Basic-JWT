const jwt = require('jsonwebtoken')
const { BadRequest } = require('../errors')


const login = async (req, res) => {
    const { username, password } = req.body
    const id = new Date().getDate()

    if (!username || !password) {
        throw new BadRequest('Please provide email or password.')
    }

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" })
    res.status(200).json({ msg: "user created", token })
}

const dashboard = async (req, res) => {
    const randomNum = Math.floor(Math.random() * 100)

    res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `Your secret number is ${randomNum}`})
}

module.exports = { login, dashboard }