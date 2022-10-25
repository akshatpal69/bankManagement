const express = require('express')
const router = express.Router()
const validateCookies = require('./validateCookies')

router.use(validateCookies)
router.get('/', async (req, res) => {
    let result = {name:'akshat', lname:'pal'}
    res.status(200).json({ result })
})


module.exports = router