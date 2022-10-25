const express = require('express')
const router = express.Router()
const connection = require("../database")
const staticQueries = require("../queries")
const { savingsIR, currentIR } = require('../ratesAndCharges')

const tableCustomer = "customer"



router.post('/createAccount', async (req, res) => {
    const { fName, mName, mName2, lName,
        accountNo,
        phone, altPhone, email,
        houseNo, street, wardNo, landmark, village, town,
        post, pincode, district, state, country
    } = req.body

    /*check data *integrity*

    DATA SANITIZATION RULES

    */

    // let getUserIDquery = `select totalnumber from customercount;`

    let currentTotalUsers
    connection.query(staticQueries.getUserIDquery, function (err, result) {
        console.log('gettingtotalusers line 24')
        if (err)  return res.status(400).json({ response:err })

        currentTotalUsers = result[0].totalnumber
        console.log(`got the user count ${currentTotalUsers}`)

        createAccountQuery = `INSERT INTO ${tableCustomer} 
                        (idcustomer,fnamecustomer, mnamecustomer, mname2customer,lnamecustomer, accountnumber, phone, email, idaddress ) 
                        VALUES ("${currentTotalUsers + 1}", "${fName}","${mName}","${mName2}","${lName}","${accountNo}","${phone}","${email}", "${currentTotalUsers + 1}");`

        connection.query(createAccountQuery, function (err, result) {
            console.log('inside create account line 34')
            if (err)  return res.status(400).json({ response:err })

            else {
                updateCustomerCount = `UPDATE customercount SET totalnumber = ${currentTotalUsers + 1}`
                connection.query(updateCustomerCount, function (err, result) {
                    console.log('inside create account line 38')
                    if (err)  return res.status(400).json({ response:err })

                    console.log('inserted')
                });
            }
        });
        return res.status(201).json({ data: 'ok' })
    });
})

router.get('/getAccount', async(req, res)=>{
    findAccountQuery = `select * from customer;`
    connection.query(findAccountQuery, function (err, result) {
        if (err)  return res.status(400).json({ response:err })
        return res.status(200).json({ response:result })
    });

})


router.put('/modifyAccount', async (req, res) => {
    const { accountnumber } = req.body
    findAccountQuery = `select * from customer where accountnumber=${accountnumber};`

    testUpateQuery = `UPDATE test SET name="${newName}" WHERE id = "${id}"`
    connection.query(testUpateQuery, function (err, result) {
        if (err)  return res.status(400).json({ response:err })
        console.log("1 record updated");
        console.log(result)
        return res.status(201).json({ response:result })
    });


})

router.delete('/deleteAccount', async (req, res) => {
    const { id } = req.body
    testDeleteQuery = `DELETE FROM test WHERE id = "${id}";`
    connection.query(testDeleteQuery, function (err, result) {
        if (err)  return res.status(400).json({ response:err })

        console.log("1 record deleted");
        console.log(result)
        return res.status(201).json({ result })
    });

})


module.exports = router