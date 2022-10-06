const express = require('express')
const router = express.Router()
const connection = require("../database")
const queries = require("../queries")
const { savingsIR, currentIR } = require('../ratesAndCharges')

const tableCustomer = "customer"

// api/account/...
router.post('/createAccount', async (req, res) => {
    const { fName, mName, mName2, lName,
        accountNo,
        phone, altPhone, email,
        houseNo, street, wardNo, landmark, village, town,

        post, pincode, district, state, country
    } = req.body

    // console.log(fName, mName, mName2, lName, accountNo, phone, altPhone, email, houseNo, street, wardNo, landmark, village, town, post, pincode, district, state, country)
    let getUserIDquery = `select totalnumber from customercount;`
    let currentTotalUsers

    connection.query(getUserIDquery, function (err, result) {
        console.log('gettingtotalusers line 24')
        if (err) console.log(err.code)
        currentTotalUsers = result[0].totalnumber

        createAccountQuery = `INSERT INTO ${tableCustomer} 
                        (idcustomer,fnamecustomer, mnamecustomer, mname2customer,lnamecustomer, accountnumber, phone, email, idaddress ) 
                        VALUES ("${currentTotalUsers + 1}", "${fName}","${mName}","${mName2}","${lName}","${accountNo}","${phone}","${email}", "${currentTotalUsers + 1}");`

        connection.query(createAccountQuery, function (err, result) {
            console.log('inside create account line 38')
            if (err) console.log(err.message)
            else {
                updateCustomerCount = `UPDATE customercount SET totalnumber = ${currentTotalUsers + 1}`
                connection.query(updateCustomerCount, function (err, result) {
                    console.log('inside create account line 38')
                    if (err) console.log(err.message)
                    console.log('inserted')

                });
            }



        });
        return res.status(201).json({ data: 'ok' })
    });
    // console.log(`${currentTotalUsers} line 33`)
    // console.log(currentTotalUsers + 1, fName, mName, mName2, lName, accountNo, phone, email, currentTotalUsers + 1)
    // 






    // const { id, name } = req.body
    // console.log(id, name)
    // testInsertQuery = `INSERT INTO test (id, name) VALUES (${id}, "${name}");`
    // connection.query(testInsertQuery, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    //     console.log(result)
    //     return res.status(201).json({ result })
    // });


    //check data *integrity*


})

router.post('/modifyAccount', async (req, res) => {
    const { id, newName } = req.body

    testUpateQuery = `UPDATE test SET name="${newName}" WHERE id = "${id}"`
    connection.query(testUpateQuery, function (err, result) {
        if (err) throw err;
        console.log("1 record updaated");
        console.log(result)
        return res.status(201).json({ result })
    });


})

router.post('/deleteAccount', async (req, res) => {
    const { id } = req.body
    testDeleteQuery = `DELETE FROM test WHERE id = "${id}";`
    connection.query(testDeleteQuery, function (err, result) {
        if (err) throw err;
        console.log("1 record deleted");
        console.log(result)
        return res.status(201).json({ result })
    });

})

router.post('/readAccount', async (req, res) => {
    const { name } = req.body
    testReadQuery = `SELECT * FROM test WHERE name = "${name}";`
    connection.query(testReadQuery, function (err, result) {
        if (err) throw err;
        console.log("1 record read");
        console.log(result)
        return res.status(201).json({ result })
    });
})





module.exports = router