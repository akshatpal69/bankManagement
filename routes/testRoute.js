const express = require('express')
const router = express.Router()
const connection = require("../database")
const queries = require("../queries")

router.get('/', async (req, res) => {
    let result = {name:'akshat', lname:'pal'}
    res.status(200).json({ result })
})






module.exports = router