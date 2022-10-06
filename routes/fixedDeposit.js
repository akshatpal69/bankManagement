const express = require('express')
const router = express.Router()
const connection = require("../database")
const queries = require("../queries")
const {fdIR} = require('../ratesAndCharges')
// let query = `select * from customer`
// search for users
// api/requests/...
router.post('/createFD', async (req, res) => {
    
    // try {
    //    connection.query(queries.testQuery, function (err, result, fields) {
    //         if (err) throw err;
    //         let e = result[0].fnamecustomer
            return res.status(201).json({ fd:'fdroute' })
    //       });

    // const {empid, emppass, clientIP} = req.body
    // console.log(empid)
    // console.log(emppass)
    // console.log(clientIP)
    // } catch (err) {
    //     result = 'in find users catch line 22'
    //     res.status(500).json({ err: err.message, result })
    // }
})

router.post('/createLoan', async (req, res) => {
    const { }  = req.body
    
    try {
        console.log('in add\'s try')
        
        
        return res.status(200).json({ result })
    } catch (err) {
        console.log('in catch block')
        res.status(500).json({ err: err.message })
    }
})

router.post('/createFD', async (req, res) => {
    const { }  = req.body
    
    try {
        console.log('in add\'s try')
        
        
        return res.status(200).json({ result })
    } catch (err) {
        console.log('in catch block')
        res.status(500).json({ err: err.message })
    }
})




module.exports = router